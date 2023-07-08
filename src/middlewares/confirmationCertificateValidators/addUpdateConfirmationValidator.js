import { body } from 'express-validator'
import validateResult from '../validateResult.js'

const addUpdateConfirmationValidator = [
  body('book')
    .notEmpty()
    .withMessage('El libro es requerido')
    .isInt()
    .withMessage('El libro debe ser un número')
    .trim()
    .escape(),
  body('invoice')
    .notEmpty()
    .withMessage('El folio es requerida')
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
  body('name')
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isString()
    .withMessage('El nombre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('lastname')
    .notEmpty()
    .withMessage('El apellido es requerido')
    .isString()
    .withMessage('El apellido debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('birthdate')
    .notEmpty()
    .withMessage('La fecha de nacimiento es requerida')
    .isDate()
    .withMessage('La fecha de nacimiento debe ser una fecha')
    .trim()
    .escape(),
  body('confirmationDate')
    .notEmpty()
    .withMessage('La fecha de confirmación es requerida')
    .isDate()
    .withMessage('La fecha de confirmación debe ser una fecha')
    .trim()
    .escape(),
  body('fatherName')
    .notEmpty()
    .withMessage('El nombre del padre es requerido')
    .isString()
    .withMessage('El nombre del padre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('motherName')
    .notEmpty()
    .withMessage('El nombre de la madre es requerido')
    .isString()
    .withMessage('El nombre de la madre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('placeBaptism')
    .notEmpty()
    .withMessage('El lugar de bautismo es requerido')
    .isString()
    .withMessage('El lugar de bautismo debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('godfather')
    .notEmpty()
    .withMessage('El padrino es requerido')
    .isString()
    .withMessage('El padrino debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('minister')
    .notEmpty()
    .withMessage('El ministro es requerido')
    .isString()
    .withMessage('El ministro debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('parson')
    .notEmpty()
    .withMessage('El párroco es requerido')
    .isString()
    .withMessage('El párroco debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('annotations')
    .optional()
    .isString()
    .withMessage('Las anotaciones deben ser una cadena de caracteres')
    .trim()
    .escape(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default addUpdateConfirmationValidator
