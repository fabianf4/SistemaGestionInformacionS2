import { body } from 'express-validator'
import validateResult from '../validateResult.js'

const registerValidator = [
  body('name')
    .notEmpty()
    .withMessage('El nombre es requerido')
    .trim()
    .escape(),
  body('lastname')
    .notEmpty()
    .withMessage('El apellido es requerido')
    .trim()
    .escape(),
  body('document')
    .notEmpty()
    .withMessage('El documento es requerido')
    .isInt()
    .withMessage('El documento debe ser un número')
    .trim()
    .escape(),
  body('email')
    .notEmpty()
    .withMessage('El email es requerido')
    .isEmail()
    .withMessage('El email no es válido')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('La contraseña es requerida')
    .isStrongPassword()
    .withMessage('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número')
    .trim()
    .escape(),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default registerValidator
