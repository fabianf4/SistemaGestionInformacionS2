import marriageCertificateModel from "../models/marriageCertificateModel.js"

async function findOneMarriage(book, invoice, number) {
    const marriage = await marriageCertificateModel.findOne({
        where: { book, invoice, number }
    })
    return marriage
}

export async function addMarriage(req, res) {
    const {
        book,
        invoice,
        number,
        marrierdate,
        namehusband,
        lastnamehusband,
        fatherhusband,
        motherhusband,
        placebatptismhusband,
        datebatptismhusband,
        namewife,
        lastnamewife,
        fatherwife,
        motherwife,
        placebatptismwife,
        datebatptismwife,
        namewitness,
        minister,
        parson,
        annotations
    } = req.body
    try {
        const marriage1 = await findOneMarriage(book, invoice, number)
        if (marriage1) {
            return res.status(200).json({
                success: false,
                message: "Datos de libro, folio y numero ya registrados"
            })
        }
        const marriage = await marriageCertificateModel.create({
            book,
            invoice,
            number,
            marrierdate,
            namehusband,
            lastnamehusband,
            fatherhusband,
            motherhusband,
            placebatptismhusband,
            datebatptismhusband,
            namewife,
            lastnamewife,
            fatherwife,
            motherwife,
            placebatptismwife,
            datebatptismwife,
            namewitness,
            minister,
            parson,
            annotations
        })

        return res.status(200).json({
            success: true,
            data: {
                marriage
            },
            message: "Acta de Matrimonio creada"
        })
    } catch (err) {
        return res.status(200).json({
            success: false,
            message: "Error creando acta de Matrimonio"
        })
    }
}