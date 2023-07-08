import { validationResult } from 'express-validator'

const validateResult = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(200).json({
      success: false,
      data: {
        errors: errors.array()[0].msg
      },
      message: 'Error en la validación'
    })
  }
  next()
}

export default validateResult
