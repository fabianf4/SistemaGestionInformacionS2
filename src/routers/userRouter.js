import { Router } from "express"
import { login, register, getUser } from "../controllers/userController.js"
import validateRole from "../middelware/validateRole.js"
import validateToken from "../middelware/validateToken.js"
import loginValidator from "../middelware/userValidators/loginValidator.js"
import registerValidator from "../middelware/userValidators/registerValidator.js"

const router = new Router()

router.post("/login", loginValidator, login)
router.post("/register", registerValidator, register)
router.get("/profile", validateToken, validateRole(["USER"]), getUser)
router.put("/profile")
router.delete("/profile")

export default router
