import { body } from 'express-validator'
import validateResult from '../validateResult.js'

const deleteConfirmationValidator = [
  body('book')
    .notEmpty()
    .withMessage('El libro es requerido')
    .isInt()
    .withMessage('El libro debe ser un número')
    .trim()
    .escape(),
  body('invoice')
    .notEmpty()
    .withMessage('El folio es requerido')
    .isInt()
    .withMessage('El folio debe ser un número')
    .trim()
    .escape(),
  body('number')
    .notEmpty()
    .withMessage('El número es requerido')
    .isInt()
    .withMessage('El número debe ser un número')
    .trim()
    .escape(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default deleteConfirmationValidator
