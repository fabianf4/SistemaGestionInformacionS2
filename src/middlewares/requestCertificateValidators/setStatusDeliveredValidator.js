import { param } from 'express-validator'
import validateResult from '../validateResult.js'

const setStatusDeliveredValidator = [
  param('id')
    .notEmpty()
    .isInt()
    .withMessage('El id debe ser un número')
    .trim()
    .escape(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default setStatusDeliveredValidator
