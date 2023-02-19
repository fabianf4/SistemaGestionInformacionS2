import baptismalCeritificateModel from "../models/baptismalCertificateModel.js";

const errors = {
    loginError: (res) => {
        return res.status(404).json({
            success: false,
            message: "Usuario y/o contraseña incorrectos"
        })
    },
    internalServerError: (res) => {
        return res.status(500).json({
            success: false,
            message: "Algo a salido mal"
        })
    }
}
export async function addBaptism(req, res){
    const{book, invoice, number, name, lastName, birthdate, baptismDate, fatherName, motherName, maternalGrandfather, maternalGrandmother, paternalGrandmother, paternalGrandfather,godfather, godmother, minister, parson, annotations}= req.body
    try{
        const baptism1= await baptismalCeritificateModel.findOne({where:{book, invoice, number}})

        if(baptism1){
            return res.status(404).json({
                success: false,
                message: "Datos de libro, folio y numero ya registrados"
            })
        }
        const baptism = await baptismalCeritificateModel.create({
            book, invoice, number, name, lastName, birthdate, baptismDate, fatherName, motherName, maternalGrandfather, maternalGrandmother, paternalGrandmother, paternalGrandfather, godfather, godmother, minister, parson, annotations
        })
        
        return res.status(200).json({
            success: true,
            data:{
                baptism
            }, 
            message: "Acta de bautismo creada"
        })

    }catch(err){
        return res.status(200).json({
            success: false,
            message: "Error creando acta de bautismo"
        })
    }
}