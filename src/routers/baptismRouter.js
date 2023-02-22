import { Router } from "express"
import { addBaptism, deleteBaptism, getBaptismToNameLastname, updateBaptism } from "../controllers/baptismController.js"
const router= new Router()

router.post('/addBaptism', addBaptism)
router.get('/getBaptismToNameLastname', getBaptismToNameLastname)
router.delete('/deleteBaptism', deleteBaptism)
router.put('/updateBaptism', updateBaptism)
export default router