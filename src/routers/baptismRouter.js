import { Router } from 'express'
import {
  addBaptism,
  deleteBaptism,
  getBaptismToNameLastname,
  updateBaptism,
  getBaptismToBookInvoiceNumber
} from '../controllers/baptismController.js'
import addUpdateBaptismValidator from '../middlewares/baptismCertificateValidators/addUpdateBaptismValidator.js'
import deleteBaptismValidator from '../middlewares/baptismCertificateValidators/deleteBaptismValidator.js'
import getBaptismToNameLastnameValidator from '../middlewares/baptismCertificateValidators/getBaptismToNameLastnameValidator.js'
import validateRole from '../middlewares/validateRole.js'
import validateToken from '../middlewares/validateToken.js'

const router = new Router()

router.post(
  '/addBaptism',
  validateToken,
  validateRole(['ADMIN']),
  addUpdateBaptismValidator,
  addBaptism
)
router.get(
  '/getBaptismToNameLastname/:name/:lastname',
  validateToken,
  validateRole(['ADMIN']),
  getBaptismToNameLastnameValidator,
  getBaptismToNameLastname
)
router.delete(
  '/deleteBaptism',
  validateToken,
  validateRole(['ADMIN']),
  deleteBaptismValidator,
  deleteBaptism
)
router.put(
  '/updateBaptism',
  validateToken,
  validateRole(['ADMIN']),
  addUpdateBaptismValidator,
  updateBaptism
)
router.get(
  '/getBaptismToBookInvoiceNumber/:book/:invoice/:number',
  validateToken,
  validateRole(['ADMIN']),
  getBaptismToBookInvoiceNumber
)
export default router
