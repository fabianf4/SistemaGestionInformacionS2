import { param } from 'express-validator'
import validateResult from '../validateResult.js'

const getRequestsForDayValidator = [
  param('orderDate')
    .notEmpty()
    .withMessage('La fecha es requerida')
    .isDate()
    .withMessage('Debe ser una fecha')
    .trim()
    .escape(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default getRequestsForDayValidator
