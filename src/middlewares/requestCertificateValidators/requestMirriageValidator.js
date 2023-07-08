import { body } from 'express-validator'
import validateResult from '../validateResult.js'

const requestMirriageValidator = [
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
  body('marrierdate')
    .notEmpty()
    .withMessage('La fecha es requerida')
    .isDate()
    .withMessage('La fecha de bautismo debe ser una fecha')
    .trim()
    .escape(),
  body('motherhusband')
    .notEmpty()
    .withMessage('El nombre de la madre es requerido')
    .isString()
    .withMessage('El nombre de la madre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  body('motherwife')
    .notEmpty()
    .withMessage('El nombre de la madre es requerido')
    .isString()
    .withMessage('El nombre de la madre debe ser una cadena de caracteres')
    .trim()
    .escape(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default requestMirriageValidator
