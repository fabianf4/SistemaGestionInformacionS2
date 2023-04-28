import requestCertificateModel from "../models/requestCertificateModel.js"
import confirmationCertificateModel from "../models/confirmationCertificateModel.js"
import baptismalCeritificateModel from "../models/baptismalCertificateModel.js"
import marriageCertificateModel from "../models/marriageCertificateModel.js"
import userModel from "../models/userModel.js"

async function findCertificateToType(data, type) {
    let certificate
    switch (type) {
        case "CONFIRMACION":
            certificate = await confirmationCertificateModel.findOne({
                where: { ...data }
            })
            break
        case "BAUTISMO":
            certificate = await baptismalCeritificateModel.findOne({
                where: { ...data }
            })
            break
        case "MATRIMONIO":
            certificate = await marriageCertificateModel.findOne({
                where: { ...data }
            })
            break
        default:
            break
    }
    return certificate
}

export async function requestConfirmation(req, res) {
    const { type } = req.body

    const {
        name,
        lastname,
        birthdate,
        fatherName,
        motherName,
        godfather,
        uuid: userUuid,
        namehusband,
        lastnamehusband,
        namewife,
        lastnamewife,
        marrierdate,
        motherwife,
        motherhusband
    } = req.body

    console.log(req.body)

    try {
        let certificate 
        if(type != "MATRIMONIO"){
            certificate = await findCertificateToType(
                {
                    name,
                    lastname,
                    birthdate,
                    fatherName,
                    motherName,
                    godfather
                },
                type
            )
        }else{
            certificate = await findCertificateToType(
                {
                    namehusband,
                    lastnamehusband,
                    namewife,
                    lastnamewife,
                    marrierdate,
                    motherwife,
                    motherhusband
                },
                type
            )
        }

        if (!certificate) {
            return res.status(200).json({
                success: false,
                message: "No se encontro un acta con los datos ingresados"
            })
        }
        const { book, invoice, number } = certificate
        const request = await requestCertificateModel.create({
            userUuid,
            book,
            invoice,
            number,
            type
        })
        return res.status(200).json({
            success: true,
            data: {
                requestConfirmation: request
            },
            message: "Solicitud de impresion creada"
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error, al solicitar un certificado"
        })
    }
}

export async function getRequestsForDay(req, res) {
    const { orderDate } = req.body
    try {
        const find = await requestCertificateModel.findAll({
            where: {
                orderDate
            }
        })

        for (let i = 0; i < find.length; i++) {
            const { userUuid, book, invoice, number, type } = find[i].dataValues

            const user = await userModel.findOne({
                where: {
                    uuid: userUuid
                }
            })
            find[i].dataValues.name = user.name + " " + user.lastname

            if (find[i].dataValues.status == "PENDING") {
                const certificate = await findCertificateToType(
                    { book, invoice, number },
                    type
                )

                find[i].dataValues.certificate = certificate
            }
        }

        if (!find || find.length === 0) {
            return res.status(200).json({
                success: false,
                message: "No se encontraron solicitudes"
            })
        }
        return res.status(200).json({
            success: true,
            data: {
                find
            },
            message: "Solicitud(es) encontradas"
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error buscando solicitudes de actas"
        })
    }
}
