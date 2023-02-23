import { body } from "express-validator"
import validateResult from "../validateResult.js"

const getBaptismToNameLastnameValidator = [
    body("name")
        .notEmpty()
        .withMessage("El nombre es requerido")
        .trim()
        .escape(),
    body("lastname")
        .notEmpty()
        .withMessage("El apellido es requerido")
        .trim()
        .escape(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export default getBaptismToNameLastnameValidator
