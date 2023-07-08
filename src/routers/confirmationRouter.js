import { Router } from 'express'
import {
  addConfirmation,
  getConfirmToNameLastname,
  deleteConfirmation,
  updateConfirmation,
  getConfirmationToBookInvoiceNumber
} from '../controllers/confirmationController.js'
import addUpdateConfirmationValidator from '../middlewares/confirmationCertificateValidators/addUpdateConfirmationValidator.js'
import deleteConfirmationValidator from '../middlewares/confirmationCertificateValidators/deleteConfirmationValidator.js'
import getConfirmationToNameLastnameValidator from '../middlewares/confirmationCertificateValidators/getConfirmationToNameLastnameValidator.js'
import validateToken from '../middlewares/validateToken.js'
import validateRole from '../middlewares/validateRole.js'
const router = new Router()

router.post(
  '/addConfirmation',
  validateToken,
  validateRole(['ADMIN']),
  addUpdateConfirmationValidator,
  addConfirmation
)
router.get(
  '/getConfirmToNameLastname/:name/:lastname',
  validateToken,
  validateRole(['ADMIN']),
  getConfirmationToNameLastnameValidator,
  getConfirmToNameLastname
)
router.delete(
  '/deleteConfirmation',
  validateToken,
  validateRole(['ADMIN']),
  deleteConfirmationValidator,
  deleteConfirmation
)
router.put(
  '/updateConfirmation',
  validateToken,
  validateRole(['ADMIN']),
  addUpdateConfirmationValidator,
  updateConfirmation
)
router.get(
  '/getConfirmationToBookInvoiceNumber/:book/:invoice/:number',
  validateToken,
  validateRole(['ADMIN']),
  getConfirmationToBookInvoiceNumber
)

export default router
