import { Router } from "express"
import {addMarriage,getMarriageToNameLastname,deleteMarriage,updateMarriage} from "../controllers/marriageController.js"
const router= new Router()

router.post('/addMarriage',addMarriage)
router.get('/getMarriageToNameLastname',getMarriageToNameLastname)
router.delete('/deleteMarriage',deleteMarriage)
router.put('/updateMarriage',updateMarriage)

export default router