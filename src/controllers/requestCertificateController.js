import requestCertificateModel from "../models/requestCertificateModel.js"
import confirmationCertificateModel from "../models/confirmationCertificateModel.js"

async function findCertificateToType(data, type){
    let certificate
    switch (type) {
        case "CONFIRMACION":
            certificate= await confirmationCertificateModel.findOne({where : {...data}})
            
            break;
        case "BAUTISMO":
            
            break;
        default:
            break;
    }
    return certificate    
}

export async function requestConfirmation(req, res){
    const {
        name,
        lastname,
        birthdate,
        fatherName,
        motherName,
        godfather,
        uuid:userUuid, 
        type,
        status
    } = req.body
    
    try{
        const confirmation= await findCertificateToType({name, lastname, birthdate, fatherName, motherName, godfather}, type)
        if(!confirmation){
            return res.status(200).json({
                success: false,
                message: "No se encontro un acta con los datos ingresados"
            })    
        }
        const {book, invoice, number} = confirmation
        const requestConfirmation= await requestCertificateModel.create({
            userUuid, book, invoice, number, type, status
        } )
        return res.status(200).json({
            success: true,
            data: {
                requestConfirmation
            },
            message: "Solicitud de impresion creada"
        })
        
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error, al solicitar un certificado de confirmacion"
        })
    }    
}