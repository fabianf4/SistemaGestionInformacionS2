import { Router } from 'express'
import validateRole from '../middlewares/validateRole.js'
import validateToken from '../middlewares/validateToken.js'
import { createEvent, requestEvent } from '../controllers/eventController.js'

const router = new Router()

router.post('/createEvent', validateToken, validateRole(['ADMIN']), createEvent)
router.post(
  '/requestEvent',
  validateToken,
  validateRole(['USER', 'ADMIN']),
  requestEvent
)

export default router
