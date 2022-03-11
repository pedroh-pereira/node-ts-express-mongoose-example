import UserController from '@controllers/user.controller'
import { Router } from 'express'

const router = Router()

router.route('/users')
  .post(UserController.create)
  .get(UserController.findAll)

router.route('/users/:id')
  .get(UserController.findById)
  .patch(UserController.partialUpdate)
  .delete(UserController.deleteUser)

export default router
