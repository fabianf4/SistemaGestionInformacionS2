import { Router } from "express"
import { addBaptism, getBaptismToNameLastname } from "../controllers/baptismController.js"
const router= new Router()

router.post('/addBaptism', addBaptism)
router.get('/getBaptismToNameLastname', getBaptismToNameLastname)

export default router