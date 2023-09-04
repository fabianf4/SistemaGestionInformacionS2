import confirmationCeritificateModel from '../models/confirmationCertificateModel.js'

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
        message: 'Datos de libro, folio y numero ya registrados'
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
      message: 'Acta de confirmacion creada'
    })
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: 'Error creando acta de confirmacion'
    })
  }
}

export async function getConfirmToNameLastname(req, res) {
  const { name, lastname } = req.params
  try {
    const confirmation = await confirmationCeritificateModel.findAll({
      where: { name, lastname }
    })
    if (!confirmation || confirmation.length === 0) {
      return res.status(200).json({
        success: false,
        message: 'Acta(s) no encontradas'
      })
    }
    return res.status(200).json({
      success: true,
      data: {
        confirmation
      },
      message: 'Acta(s) encontrada'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error trayendo actas'
    })
  }
}

export async function deleteConfirmation(req, res) {
  try {
    const { book, invoice, number } = req.body
    const confirmation = await findOneConfirmation(book, invoice, number)

    if (!confirmation) {
      return res.status(200).json({
        success: false,
        message: 'Registro no encontrado'
      })
    }
    await confirmation.destroy()

    return res.status(200).json({
      success: true,
      message: 'Registro eliminado exitosamente'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error eliminando registro de bautismo'
    })
  }
}

export async function updateConfirmation(req, res) {
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
    const confirmation = await confirmationCeritificateModel.findOne({
      where: { book, invoice, number }
    })
    if (!confirmation) {
      return res.status(200).json({
        success: false,
        message: 'Acta de Confirmacion no encontrada'
      })
    }

    await confirmation.update({
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
      message: 'Acta de Confirmacion actualizada exitosamente'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error actualizando acta de Confirmacion'
    })
  }
}

export async function getConfirmationToBookInvoiceNumber(req, res) {
  const { book, invoice, number } = req.params
  try {
    const confirmation = await confirmationCeritificateModel.findOne({
      where: { book, invoice, number }
    })

    if (!confirmation) {
      return res.status(200).json({
        success: false,
        message: 'Acta de Confirmacion no encontrada'
      })
    }

    return res.status(200).json({
      success: true,
      data: {
        confirmation
      },
      message: 'Acta de Confirmacion encontrada'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error trayendo acta de Confirmacion'
    })
  }
}
