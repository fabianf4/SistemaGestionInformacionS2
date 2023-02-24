import requestCertificateModel from '../models/requestCertificateModel'

export async function createRequest(req, res) {
    const { uuid: userUuid, book, invoice, number } = req.body

    try {
        const request = await requestCertificateModel.create({
            userUuid,
            book,
            invoice,
            number,
            status: "PENDING"
        })

        return res.status(200).json({
            success: true,
            data: {
                request
            },
            message: "Solicitud exitosa"
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error creando la solicitud"
        })
    }
} 