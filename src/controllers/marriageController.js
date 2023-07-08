import marriageCertificateModel from '../models/marriageCertificateModel.js'

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
        message: 'Datos de libro, folio y numero ya registrados'
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
      message: 'Acta de Matrimonio creada'
    })
  } catch (err) {
    console.log(err)
    return res.status(200).json({
      success: false,
      message: 'Error creando acta de Matrimonio'
    })
  }
}

export async function getMarriageToNameLastname(req, res) {
  const { namehusband, lastnamehusband } = req.params
  try {
    const marriage = await marriageCertificateModel.findAll({
      where: { namehusband, lastnamehusband }
    })
    if (!marriage || marriage.length === 0) {
      return res.status(200).json({
        success: false,
        message: 'Acta(s) no encontradas'
      })
    }
    return res.status(200).json({
      success: true,
      data: {
        marriage
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

export async function deleteMarriage(req, res) {
  try {
    const { book, invoice, number } = req.body
    const marriage = await findOneMarriage(book, invoice, number)

    if (!marriage) {
      return res.status(200).json({
        success: false,
        message: 'Registro no encontrado'
      })
    }
    await marriage.destroy()

    return res.status(200).json({
      success: true,
      message: 'Registro eliminado exitosamente'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error eliminando registro de Matrimono'
    })
  }
}

export async function updateMarriage(req, res) {
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
    const marriage = await marriageCertificateModel.findOne({
      where: { book, invoice, number }
    })
    if (!marriage) {
      return res.status(200).json({
        success: false,
        message: 'Acta de Confirmacion no encontrada'
      })
    }

    await marriage.update({
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
      message: 'Acta de Matrimonio actualizada exitosamente'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error actualizando acta de Matrimonio'
    })
  }
}

export async function getMarriageToBookInvoiceNumber(req, res) {
  const { book, invoice, number } = req.params
  try {
    const marriage = await marriageCertificateModel.findOne({
      where: { book, invoice, number }
    })
    if (!marriage) {
      return res.status(200).json({
        success: false,
        message: 'Acta no encontrada'
      })
    }
    return res.status(200).json({
      success: true,
      data: {
        marriage
      },
      message: 'Acta encontrada'
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Error trayendo acta'
    })
  }
}
