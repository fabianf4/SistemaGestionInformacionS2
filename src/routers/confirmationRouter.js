import { Router } from "express"
//import { addBaptism, deleteBaptism, getBaptismToNameLastname, updateBaptism } from "../controllers/baptismController.js"
import {addConfirmation} from "../controllers/confirmationController.js"
import {getConfirmToNameLastname} from "../controllers/confirmationController.js"
import {deleteConfirmation} from "../controllers/confirmationController.js"
import {updateConfirmation} from "../controllers/confirmationController.js"
const router= new Router()
import addConfirmationValidator from "../middlewares/confirmationCertificateValidators/addConfirmationValidator.js"

router.post('/addConfirmation', addConfirmationValidator, addConfirmation)
router.get('/getConfirmToNameLastname',getConfirmToNameLastname)

router.delete('/deleteConfirmation', deleteConfirmation)

router.put('/updateConfirmation', updateConfirmation)

export default router