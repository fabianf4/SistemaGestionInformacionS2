import { body } from "express-validator"
import validateResult from "../validateResult.js"

const getMarriageToNameLastnameValidator = [
    body("namehusband")
        .notEmpty()
        .withMessage("El nombre es requerido")
        .trim()
        .escape(),
    body("lastnamehusband")
        .notEmpty()
        .withMessage("El apellido es requerido")
        .trim()
        .escape(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

export default getMarriageToNameLastnameValidator