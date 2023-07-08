import { Router } from 'express'
import {
  addMarriage,
  getMarriageToNameLastname,
  deleteMarriage,
  updateMarriage,
  getMarriageToBookInvoiceNumber
} from '../controllers/marriageController.js'
import addUpdateMarriageValidator from '../middlewares/marriageCertificateValidators/addUpdateMarriageValidator.js'
import deleteMarriageValidator from '../middlewares/marriageCertificateValidators/deleteMarriageValidator.js'
import getMarriageToNameLastnameValidator from '../middlewares/marriageCertificateValidators/getMarriageToNameLastnameValidator.js'
import validateToken from '../middlewares/validateToken.js'
import validateRole from '../middlewares/validateRole.js'
const router = new Router()

router.post(
  '/addMarriage',
  validateToken,
  validateRole(['ADMIN']),
  addUpdateMarriageValidator,
  addMarriage
)
router.get(
  '/getMarriageToNameLastname/:namehusband/:lastnamehusband',
  validateToken,
  validateRole(['ADMIN']),
  getMarriageToNameLastnameValidator,
  getMarriageToNameLastname
)
router.delete(
  '/deleteMarriage',
  validateToken,
  validateRole(['ADMIN']),
  deleteMarriageValidator,
  deleteMarriage
)
router.put(
  '/updateMarriage',
  validateToken,
  validateRole(['ADMIN']),
  addUpdateMarriageValidator,
  updateMarriage
)
router.get(
  '/getMarriageToBookInvoiceNumber/:book/:invoice/:number',
  validateToken,
  validateRole(['ADMIN']),
  getMarriageToBookInvoiceNumber
)

export default router
