import { Router } from 'express'
import {
  requestConfirmation,
  getRequestsForDay,
  requestBaptism,
  requestMirriage,
  setStatusDelivered
} from '../controllers/requestCertificateController.js'
import validateRole from '../middlewares/validateRole.js'
import validateToken from '../middlewares/validateToken.js'
import requestBaptismValidator from '../middlewares/requestCertificateValidators/requestBaptismValidator.js'
import requestConfirmationValidator from '../middlewares/requestCertificateValidators/requestConfirmationValidator.js'
import requestMirriageValidator from '../middlewares/requestCertificateValidators/requestMirriageValidator.js'
import getRequestsForDayValidator from '../middlewares/requestCertificateValidators/getRequestsForDayValidator.js'
import setStatusDeliveredValidator from '../middlewares/requestCertificateValidators/setStatusDeliveredValidator.js'

const router = new Router()

router.post(
  '/createRequest/baptism',
  validateToken,
  validateRole(['USER', 'ADMIN']),
  requestBaptismValidator,
  requestBaptism
)
router.post(
  '/createRequest/confirmation',
  validateToken,
  validateRole(['USER', 'ADMIN']),
  requestConfirmationValidator,
  requestConfirmation
)
router.post(
  '/createRequest/marriage',
  validateToken,
  validateRole(['USER', 'ADMIN']),
  requestMirriageValidator,
  requestMirriage
)

router.get(
  '/getRequestsForDay/:orderDate',
  validateToken,
  validateRole(['ADMIN']),
  getRequestsForDayValidator,
  getRequestsForDay
)

router.put(
  '/setStatusDelivered/:id',
  validateToken,
  validateRole(['ADMIN']),
  setStatusDeliveredValidator,
  setStatusDelivered
)

export default router
