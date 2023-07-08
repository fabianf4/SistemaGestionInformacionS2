import { body } from 'express-validator'
import validateResult from '../validateResult.js'

const requestConfirmationValidator = [
  body('name')
    .notEmpty()
    .withMessage('El nombre es requerido')
    .trim()
    .escape()
    .isString(),
  body('lastname')
    .notEmpty()
    .withMessage('El apellido es requerido')
    .trim()
    .escape()
    .isString(),
  body('birthdate')
    .notEmpty()
    .withMessage('La fecha de nacimiento es requerida')
    .trim()
    .escape()
    .isDate(),
  body('fatherName')
    .notEmpty()
    .withMessage('El nombre del padre es requerido')
    .trim()
    .escape()
    .isString(),
  body('motherName')
    .notEmpty()
    .withMessage('El nombre de la madre es requerido')
    .trim()
    .escape()
    .isString(),
  body('godfather')
    .notEmpty()
    .withMessage('El nombre del padrino es requerido')
    .trim()
    .escape()
    .isString(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default requestConfirmationValidator
