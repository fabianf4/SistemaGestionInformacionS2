import { Router } from "express"
import { addBaptism, deleteBaptism, getBaptismToNameLastname } from "../controllers/baptismController.js"
const router= new Router()

router.post('/addBaptism', addBaptism)
router.get('/getBaptismToNameLastname', getBaptismToNameLastname)
router.delete('/deleteBaptism', deleteBaptism)
export default router