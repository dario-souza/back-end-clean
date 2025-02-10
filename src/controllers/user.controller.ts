import { Request, Response } from 'express'
import userService from '../services/user.service'

const userController = () => {
  const getUsers = (req: Request, res: Response) => {
    try {
      const users = userService().getUsers()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: (error as Error).message })
    }
  }

  const createUser = (req: Request, res: Response) => {
    try {
      const user = userService().createUser(req.body)
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({ message: (error as Error).message })
    }
  }

  const updateUser = (req: Request, res: Response) => {
    try {
      const user = userService().updateUser(req.params.id, req.body)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: (error as Error).message })
    }
  }

  const deleteUser = (req: Request, res: Response) => {
    try {
      userService().deleteUser(req.params.id)
      res.status(200).json({ message: 'User deleted' })
    } catch (error) {
      res.status(500).json({ message: (error as Error).message })
    }
  }

  const getUserById = (req: Request, res: Response) => {
    try {
      const user = userService().getUserById(req.params.id)
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: (error as Error).message })
    }
  }

  return {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
  }
}

export default userController
