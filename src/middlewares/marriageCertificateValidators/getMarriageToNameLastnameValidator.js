import { param } from 'express-validator'
import validateResult from '../validateResult.js'

const getMarriageToNameLastnameValidator = [
  param('namehusband')
    .notEmpty()
    .withMessage('El nombre es requerido')
    .trim()
    .escape(),
  param('lastnamehusband')
    .notEmpty()
    .withMessage('El apellido es requerido')
    .trim()
    .escape(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default getMarriageToNameLastnameValidator
