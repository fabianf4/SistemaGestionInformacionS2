import { Router } from "express"
import { addBaptism } from "../controllers/baptismController.js"
const router= new Router()

router.post('/addBaptism', addBaptism)

export default router