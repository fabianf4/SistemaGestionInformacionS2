import { Router } from "express"
import {addMarriage,getMarriageToNameLastname,deleteMarriage,updateMarriage} from "../controllers/marriageController.js"
const router= new Router()
import addUpdateMarriageValidator from "../middlewares/marriageCertificateValidators/addUpdateMarriageValidator.js"
import deleteMarriageValidator from "../middlewares/marriageCertificateValidators/deleteMarriageValidator.js"
import getMarriageToNameLastnameValidator from "../middlewares/marriageCertificateValidators/getMarriageToNameLastnameValidator.js"
import validateToken from "../middlewares/validateToken.js"
import validateRole from "../middlewares/validateRole.js"

router.post(
    "/addMarriage",
    validateToken,
    validateRole(["ADMIN"]),
    addUpdateMarriageValidator,
    addMarriage
)
router.post(
    "/getMarriageToNameLastname",
    validateToken,
    validateRole(["ADMIN"]),
    getMarriageToNameLastnameValidator,
    getMarriageToNameLastname
)
router.delete(
    "/deleteMarriage",
    validateToken,
    validateRole(["ADMIN"]),
    deleteMarriageValidator,
    deleteMarriage
)
router.put(
    "/updateMarriage",
    validateToken,
    validateRole(["ADMIN"]),
    addUpdateMarriageValidator,
    updateMarriage
)

export default router