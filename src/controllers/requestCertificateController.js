import requestCertificateModel from "../models/requestCertificateModel.js"
import confirmationCertificateModel from "../models/confirmationCertificateModel.js"


export async function requestConfirmation(req, res){
    const {
        name,
        lastname,
        birthdate,
        fatherName,
        motherName,
        godfather,
        uuid, 
        type,
        status
    } = req.body
    
    try{
        const confirmation= await confirmationCertificateModel.findOne({where :{name, lastname, birthdate, fatherName, motherName, godfather}})
        if(!confirmation){
            return res.status(200).json({
                success: false,
                message: "No se encontro un acta con los datos ingresados"
            })    
        }
        const {book, invoice, number} = confirmation
        const userUuid= uuid
        const requestConfirmation= await requestCertificateModel.create({
            userUuid, book, invoice, number, type, status
        } )
        console.log({requestConfirmation})
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