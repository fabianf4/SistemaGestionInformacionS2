import requestCertificateModel from '../models/requestCertificateModel.js'
import confirmationCertificateModel from '../models/confirmationCertificateModel.js'
import baptismalCeritificateModel from '../models/baptismalCertificateModel.js'
import marriageCertificateModel from '../models/marriageCertificateModel.js'
import userModel from '../models/userModel.js'

async function findCertificateToType(data, type) {
  console.log(data)
  let certificate
  switch (type) {
    case 'CONFIRMACION':
      certificate = await confirmationCertificateModel.findOne({
        where: { ...data }
      })
      break
    case 'BAUTISMO':
      certificate = await baptismalCeritificateModel.findOne({
        where: { ...data }
      })
      break
    case 'MATRIMONIO':
      certificate = await marriageCertificateModel.findOne({
        where: { ...data }
      })
      break
    default:
      break
  }
  return certificate
}

async function addRequestCertificate(uuid, book, invoice, number, type) {
  return await requestCertificateModel.create({
    uuid,
    book,
    invoice,
    number,
    type
  })
}

export async function requestConfirmation(req, res) {
  const type = 'CONFIRMACION'
  try {
    const {
      uuid: userUuid,
      name,
      lastname,
      birthdate,
      fatherName,
      motherName,
      godfather
    } = req.body
    const certificate = await findCertificateToType(
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

    if (!certificate) {
      return res.status(200).json({
        success: false,
        message: 'No se encontro un acta con los datos ingresados'
      })
    }

    const { book, invoice, number } = certificate

    const request = await addRequestCertificate(
      userUuid,
      book,
      invoice,
      number,
      type
    )

    return res.status(200).json({
      success: true,
      data: {
        requestConfirmation: request
      },
      message: 'Solicitud de impresion creada'
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: 'Error creando la solicitud de acta'
    })
  }
}

export async function requestBaptism(req, res) {
  const type = 'BAUTISMO'
  try {
    const {
      uuid,
      name,
      lastname,
      birthdate,
      fatherName,
      motherName,
      godfather
    } = req.body

    const certificate = await findCertificateToType(
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

    if (!certificate) {
      return res.status(200).json({
        success: false,
        message: 'No se encontro un acta con los datos ingresados'
      })
    }

    const { book, invoice, number } = certificate
    const request = await addRequestCertificate(
      uuid,
      book,
      invoice,
      number,
      type
    )

    return res.status(200).json({
      success: true,
      data: {
        requestConfirmation: request
      },
      message: 'Solicitud de impresion creada'
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: 'Error creando la solicitud de acta'
    })
  }
}

export async function requestMirriage(req, res) {
  const type = 'MATRIMONIO'
  try {
    const {
      uuid,
      namehusband,
      lastnamehusband,
      namewife,
      lastnamewife,
      marrierdate,
      motherwife,
      motherhusband
    } = req.body

    const certificate = await findCertificateToType(
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

    if (!certificate) {
      return res.status(200).json({
        success: false,
        message: 'No se encontro un acta con los datos ingresados'
      })
    }

    const { book, invoice, number } = certificate
    const request = await addRequestCertificate(
      uuid,
      book,
      invoice,
      number,
      type
    )

    return res.status(200).json({
      success: true,
      data: {
        requestConfirmation: request
      },
      message: 'Solicitud de impresion creada'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error creando la solicitud de acta'
    })
  }
}

export async function getRequestsForDay(req, res) {
  const { orderDate } = req.params
  try {
    const find = await requestCertificateModel.findAll({
      where: {
        orderDate
      },
      include: userModel
    })

    if (!find || find.length === 0) {
      return res.status(200).json({
        success: false,
        message: 'No se encontraron solicitudes'
      })
    }
    return res.status(200).json({
      success: true,
      data: {
        find
      },
      message: 'Solicitud(es) encontradas'
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: 'Error buscando solicitudes de actas'
    })
  }
}

export async function setStatusDelivered(req, res) {
  const { id } = req.params
  try {
    const find = await requestCertificateModel.findOne({
      where: {
        id
      }
    })

    if (!find) {
      return res.status(200).json({
        success: false,
        message: 'No se encontro la solicitud'
      })
    }

    find.status = 'DELIVERED'
    await find.save()

    return res.status(200).json({
      success: true,
      data: {
        find
      },
      message: 'Solicitud actualizada'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error buscando solicitudes de actas'
    })
  }
}
