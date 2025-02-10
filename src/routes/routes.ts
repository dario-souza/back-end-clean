import { Router } from 'express'
import userController from '../controllers/user.controller'
import userMiddleware from '../middlewares/user.middleware'

const router = Router()

router.get('/users', userMiddleware().validateUser, userController().getUsers)
router.post(
  '/users',
  userMiddleware().validateUser,
  userController().createUser
)
router.put(
  '/users/:id',
  userMiddleware().validateUser,
  userController().updateUser
)
router.delete('/users/:id', userController().deleteUser)
router.get('/users/:id', userController().getUserById)

export default router
