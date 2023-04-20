import { Router } from "express"
import {addMarriage,getMarriageToNameLastname,deleteMarriage,updateMarriage} from "../controllers/marriageController.js"
const router= new Router()
import addUpdateMarriageValidator from "../middlewares/marriageCertificateValidators/addUpdateMarriageValidator.js"
import deleteMarriageValidator from "../middlewares/marriageCertificateValidators/deleteMarriageValidator.js"
import getMarriageToNameLastnameValidator from "../middlewares/marriageCertificateValidators/getMarriageToNameLastnameValidator.js"
import validateToken from "../middlewares/validateToken.js"
import validateRole from "../middlewares/validateRole.js"

router.post('/addMarriage',addMarriage)
router.post('/getMarriageToNameLastname',getMarriageToNameLastname)
router.delete('/deleteMarriage',deleteMarriage)
router.put('/updateMarriage',updateMarriage)

export default router