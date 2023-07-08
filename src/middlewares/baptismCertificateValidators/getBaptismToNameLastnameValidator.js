import { param } from 'express-validator'
import validateResult from '../validateResult.js'

const getBaptismToNameLastnameValidator = [
  param('name')
    .notEmpty()
    .withMessage('El nombre es requerido')
    .trim()
    .escape(),
  param('lastname')
    .notEmpty()
    .withMessage('El apellido es requerido')
    .trim()
    .escape(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default getBaptismToNameLastnameValidator
