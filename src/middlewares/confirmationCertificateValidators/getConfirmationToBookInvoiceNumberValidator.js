import { param } from 'express-validator'
import validateResult from '../validateResult.js'

const getConfirmationToBookInvoiceNumberValidator = [
  param('book').notEmpty().withMessage('El libro es requerido').trim().escape(),
  param('invoice')
    .notEmpty()
    .withMessage('El folio es requerido')
    .trim()
    .escape(),
  param('number')
    .notEmpty()
    .withMessage('El numero es requerido')
    .trim()
    .escape(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default getConfirmationToBookInvoiceNumberValidator
