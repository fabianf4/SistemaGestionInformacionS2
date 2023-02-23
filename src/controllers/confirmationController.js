import confirmationCeritificateModel from "../models/confirmationCertificateModel.js"

async function findOneConfirmation(book, invoice, number) {
    const confirmation = await confirmationCeritificateModel.findOne({
        where: { book, invoice, number }
    })
    return confirmation
}
export async function addConfirmation(req, res) {
    const {
        book,
        invoice,
        number,
        name,
        lastname,
        birthdate,
        confirmationDate,
        fatherName,
        motherName,
        placeBaptism,
        godfather,
        minister,
        parson,
        annotations
    } = req.body
    try {
        const confirmation1 = await findOneConfirmation(book, invoice, number)
        if (confirmation1) {
            return res.status(200).json({
                success: false,
                message: "Datos de libro, folio y numero ya registrados"
            })
        }
        const confirmation = await confirmationCeritificateModel.create({
            book,
            invoice,
            number,
            name,
            lastname,
            birthdate,
            confirmationDate,
            fatherName,
            motherName,
            placeBaptism,
            godfather,
            minister,
            parson,
            annotations
        })

        return res.status(200).json({
            success: true,
            data: {
                confirmation
            },
            message: "Acta de confirmacion creada"
        })
    } catch (err) {
        return res.status(200).json({
            success: false,
            message: "Error creando acta de confirmacion"
        })
    }
}
/*
export async function getBaptismToNameLastname(req, res){
    const {name, lastname}= req.body
    try{
        const baptism =await baptismalCeritificateModel.findAll({
            where: {name, lastname}
        })
        return res.status(200).json({
            success: true,
            data:{
                baptism
            },
            message: "Acta(s) encontrada"
        })
    }catch(err){
        return res.status(200).json({
            success: false,
            message: "No se encontraron actas"
        })
    }
}
export async function deleteBaptism(req, res){
    try{  
        
        const {book, invoice, number}= req.body
        const baptism =await findOneBaptism(book, invoice, number)

        if(!baptism){
            return res.status(200).json({
            success: false,
            message: 'Registro no encontrado'
            });
        }
        await baptism.destroy();

        return res.status(200).json({
            success: true,
            message: 'Registro eliminado exitosamente'
        });
        
    } catch(err) {
        return res.status(500).json({
          success: false,
          message: 'Error eliminando registro de bautismo'
        });
      }
    
}
export async function updateBaptism(req, res) {
    const{book, invoice, number, name, lastname, birthdate, baptismDate, fatherName, motherName, maternalGrandfather, maternalGrandmother, paternalGrandmother, paternalGrandfather,godfather, godmother, minister, parson, annotations}= req.body;
    try {
        const baptism = await baptismalCeritificateModel.findOne({where: {book, invoice, number}});
        if(!baptism) {
            return res.status(200).json({
                success: false,
                message: "Acta de bautismo no encontrada"
            });
        }

        await baptism.update({
            book, invoice, number, name, lastname, birthdate, baptismDate, fatherName, motherName, maternalGrandfather, maternalGrandmother, paternalGrandmother, paternalGrandfather, godfather, godmother, minister, parson, annotations
        });
        return res.status(200).json({
            success: true,
            data: {
                baptism
            },
            message: "Acta de bautismo actualizada exitosamente"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error actualizando acta de bautismo"
        });
    }
}*/
