import { Router } from "express"
import { requestConfirmation } from "../controllers/requestCertificateController.js"
import validateRole from "../middlewares/validateRole.js"
import validateToken from "../middlewares/validateToken.js"
const router= new Router()

router.post('/requestConfirmation', validateToken, validateRole(["USER"]), requestConfirmation)

export default router