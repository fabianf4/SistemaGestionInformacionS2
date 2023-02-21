import { Router } from "express"
import { login, register, getUser } from "../controllers/userController.js"
import verifyToken from "../middelware/validateToken.js"
import validateRole from "../middelware/validateRole.js"
import validateToken from "../middelware/validateToken.js"

const router = new Router()

router.post("/login", login)
router.post("/register", register)
router.get("/profile", validateToken, validateRole(["USER"]), getUser)
router.put("/profile")
router.delete("/profile")

export default router
