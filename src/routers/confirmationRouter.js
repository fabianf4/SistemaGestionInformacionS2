import { Router } from "express"
import {addConfirmation, getConfirmToNameLastname, deleteConfirmation, updateConfirmation} from "../controllers/confirmationController.js"
const router= new Router()
import addUpdateConfirmationValidator from "../middlewares/confirmationCertificateValidators/addUpdateConfirmationValidator.js"
import deleteConfirmationValidator from "../middlewares/confirmationCertificateValidators/deleteConfirmationValidator.js"
import getConfirmationToNameLastnameValidator from "../middlewares/confirmationCertificateValidators/getConfirmationToNameLastnameValidator.js"

router.post('/addConfirmation', addUpdateConfirmationValidator, addConfirmation)
router.get('/getConfirmToNameLastname', getConfirmationToNameLastnameValidator, getConfirmToNameLastname)
router.delete('/deleteConfirmation', deleteConfirmationValidator, deleteConfirmation)
router.put('/updateConfirmation', addUpdateConfirmationValidator,updateConfirmation)

export default router