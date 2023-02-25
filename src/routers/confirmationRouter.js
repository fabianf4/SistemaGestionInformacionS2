import { Router } from "express"
import {addConfirmation, getConfirmToNameLastname, deleteConfirmation, updateConfirmation} from "../controllers/confirmationController.js"
const router= new Router()
import addUpdateConfirmationValidator from "../middlewares/confirmationCertificateValidators/addUpdateConfirmationValidator.js"
import deleteConfirmationValidator from "../middlewares/confirmationCertificateValidators/deleteConfirmationValidator.js"
import getConfirmationToNameLastnameValidator from "../middlewares/confirmationCertificateValidators/getConfirmationToNameLastnameValidator.js"
import validateToken from "../middlewares/validateToken.js"
import validateRole from "../middlewares/validateRole.js"

router.post('/addConfirmation', validateToken,validateRole(["ADMIN"]), addUpdateConfirmationValidator ,addConfirmation)
router.get('/getConfirmToNameLastname', validateToken, getConfirmationToNameLastnameValidator, getConfirmToNameLastname)
router.delete('/deleteConfirmation', deleteConfirmationValidator, deleteConfirmation)
router.put('/updateConfirmation', addUpdateConfirmationValidator,updateConfirmation)

export default router