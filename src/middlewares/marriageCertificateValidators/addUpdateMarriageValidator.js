import { body } from 'express-validator'
import validateResult from '../validateResult.js'

const addUpdateMarriageValidator = [
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
  body('namehusband')
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isString()
    .withMessage('El nombre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('lastnamehusband')
    .notEmpty()
    .withMessage('El apellido es requerido')
    .isString()
    .withMessage('El apellido debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('datebatptismhusband')
    .notEmpty()
    .withMessage('La fecha es requerida')
    .isDate()
    .withMessage('La fecha de bautismo debe ser una fecha')
    .trim()
    .escape(),
  body('fatherhusband')
    .notEmpty()
    .withMessage('El nombre del padre es requerido')
    .isString()
    .withMessage('El nombre del padre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('motherhusband')
    .notEmpty()
    .withMessage('El nombre de la madre es requerido')
    .isString()
    .withMessage('El nombre de la madre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('placebatptismhusband')
    .notEmpty()
    .withMessage('El lugar de bautismo es requerido')
    .isString()
    .withMessage('El lugar de bautismo debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('namewife')
    .notEmpty()
    .withMessage('El nombre es requerido')
    .isString()
    .withMessage('El nombre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('lastnamewife')
    .notEmpty()
    .withMessage('El apellido es requerido')
    .isString()
    .withMessage('El apellido debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('datebatptismwife')
    .notEmpty()
    .withMessage('La fecha de bautismo es requerida')
    .isDate()
    .withMessage('La fecha de bautismo debe ser una fecha')
    .trim()
    .escape(),
  body('fatherwife')
    .notEmpty()
    .withMessage('El nombre del padre es requerido')
    .isString()
    .withMessage('El nombre del padre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('motherwife')
    .notEmpty()
    .withMessage('El nombre de la madre es requerido')
    .isString()
    .withMessage('El nombre de la madre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('placebatptismwife')
    .notEmpty()
    .withMessage('El lugar de bautismo es requerido')
    .isString()
    .withMessage('El lugar de bautismo debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('namewitness')
    .notEmpty()
    .withMessage('El testigo es requerido')
    .isString()
    .withMessage('El testigo debe ser una cadena de caracteres')
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

export default addUpdateMarriageValidator
