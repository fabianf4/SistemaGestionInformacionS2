import { Router } from 'express'
import { login, register, getUser } from '../controllers/userController.js'
import validateRole from '../middlewares/validateRole.js'
import validateToken from '../middlewares/validateToken.js'
import loginValidator from '../middlewares/userValidators/loginValidator.js'
import registerValidator from '../middlewares/userValidators/registerValidator.js'

const router = new Router()

router.post('/login', loginValidator, login)
router.post('/register', registerValidator, register)
router.get('/profile', validateToken, validateRole(['USER', 'ADMIN']), getUser)
router.put('/profile')
router.delete('/profile')

export default router
