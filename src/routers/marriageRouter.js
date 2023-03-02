import { Router } from "express"
import {addMarriage} from "../controllers/marriageController.js"
const router= new Router()

router.post('/addMarriage',addMarriage)

export default router