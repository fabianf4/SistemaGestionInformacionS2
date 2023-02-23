import { Router } from "express"
import {
    addBaptism,
    deleteBaptism,
    getBaptismToNameLastname,
    updateBaptism
} from "../controllers/baptismController.js"
import addUpdateBaptismValidator from "../middlewares/baptismCertificateValidators/addUpdateBaptismValidator.js"
import deleteBaptismValidator from "../middlewares/baptismCertificateValidators/deleteBaptismValidator.js"
import getBaptismToNameLastnameValidator from "../middlewares/baptismCertificateValidators/getBaptismToNameLastnameValidator.js"

const router = new Router()

router.post("/addBaptism", addUpdateBaptismValidator, addBaptism)
router.get(
    "/getBaptismToNameLastname",
    getBaptismToNameLastnameValidator,
    getBaptismToNameLastname
)
router.delete("/deleteBaptism", deleteBaptismValidator, deleteBaptism)
router.put("/updateBaptism", getBaptismToNameLastnameValidator, updateBaptism)
export default router
