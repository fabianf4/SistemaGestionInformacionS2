import { Router } from "express"
import { login, register} from "../controllers/userController.js"
import verifyToken from "../middelware/validateToken.js"

const router = new Router();

router.post('/login', login);
router.post('/register', register);
router.get('/profile', verifyToken);
router.put('/profile');
router.delete('/profile');

export default router;