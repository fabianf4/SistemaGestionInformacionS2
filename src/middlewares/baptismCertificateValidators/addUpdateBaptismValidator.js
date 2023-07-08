import { body } from 'express-validator'
import validateResult from '../validateResult.js'

const addUpdateBaptismValidator = [
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
  body('birthdate')
    .notEmpty()
    .withMessage('La fecha de nacimiento es requerida')
    .isDate()
    .withMessage('La fecha de nacimiento debe ser una fecha')
    .trim()
    .escape(),
  body('baptismDate')
    .notEmpty()
    .withMessage('La fecha de bautismo es requerida')
    .isDate()
    .withMessage('La fecha de bautismo debe ser una fecha')
    .trim()
    .escape(),
  body('fatherName')
    .notEmpty()
    .withMessage('El nombre del padre es requerido')
    .trim()
    .escape(),
  body('motherName')
    .notEmpty()
    .withMessage('El nombre de la madre es requerido')
    .trim()
    .escape(),
  body('maternalGrandfather')
    .notEmpty()
    .withMessage('El nombre del abuelo materno es requerido')
    .trim()
    .escape(),
  body('maternalGrandmother')
    .notEmpty()
    .withMessage('El nombre de la abuela materna es requerido')
    .trim()
    .escape(),
  body('paternalGrandfather')
    .notEmpty()
    .withMessage('El nombre del abuelo paterno es requerido')
    .trim()
    .escape(),
  body('paternalGrandmother')
    .notEmpty()
    .withMessage('El nombre de la abuela paterna es requerido')
    .trim()
    .escape(),
  body('godfather')
    .notEmpty()
    .withMessage('El nombre del padrino es requerido')
    .trim()
    .escape(),
  body('godmother')
    .notEmpty()
    .withMessage('El nombre de la madrina es requerido')
    .trim()
    .escape(),
  body('minister')
    .notEmpty()
    .withMessage('El nombre del ministro es requerido')
    .trim()
    .escape(),
  body('parson')
    .notEmpty()
    .withMessage('El nombre del párroco es requerido')
    .trim()
    .escape(),
  body('annotations').trim().escape().optional(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

export default addUpdateBaptismValidator
