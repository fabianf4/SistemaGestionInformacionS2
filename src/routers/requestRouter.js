import { Router } from "express"
import { requestConfirmation,  getRequestsForDay} from "../controllers/requestCertificateController.js"
import validateRole from "../middlewares/validateRole.js"
import validateToken from "../middlewares/validateToken.js"
const router= new Router()

router.post('/createRequest', validateToken, validateRole(["USER","ADMIN"]), requestConfirmation)
router.post('/getRequestsForDay', validateToken, validateRole(["ADMIN"]), getRequestsForDay)

export default router