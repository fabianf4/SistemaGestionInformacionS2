import { Router } from 'express'
import validateRole from '../middlewares/validateRole.js'
import validateToken from '../middlewares/validateToken.js'
import {
  createEvent,
  requestEvent,
  getEvents,
  getEventsWithUsers,
  cancelRequest,
  cancelRequestFromUser
} from '../controllers/eventController.js'

const router = new Router()

router.post('/createEvent', validateToken, validateRole(['ADMIN']), createEvent)
router.post(
  '/requestEvent',
  validateToken,
  validateRole(['USER', 'ADMIN']),
  requestEvent
)
router.get(
  '/getEvents/:date',
  validateToken,
  validateRole(['USER', 'ADMIN']),
  getEvents
)
router.get(
  '/getEventsWithUsers/:date',
  validateToken,
  validateRole(['ADMIN']),
  getEventsWithUsers
)

router.put(
  '/cancelrequest',
  validateToken,
  validateRole(['USER', 'ADMIN']),
  cancelRequest
)

router.put(
  '/cancelrequestFromUser',
  validateToken,
  validateRole(['ADMIN']),
  cancelRequestFromUser
)

export default router
