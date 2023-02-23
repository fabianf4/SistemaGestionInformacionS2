import { Router } from "express"
//import { addBaptism, deleteBaptism, getBaptismToNameLastname, updateBaptism } from "../controllers/baptismController.js"
import {addConfirmation} from "../controllers/confirmationController.js"
const router= new Router()
import addConfirmationValidator from "../middlewares/confirmationCertificateValidators/addConfirmationValidator.js"

router.post('/addConfirmation', addConfirmationValidator, addConfirmation)
/*router.get('/getBaptismToNameLastname', getBaptismToNameLastname)
router.delete('/deleteBaptism', deleteBaptism)
router.put('/updateBaptism', updateBaptism)
*/
export default router