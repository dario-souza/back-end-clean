import { NextFunction, Request, Response } from 'express'

const userMiddleware = () => {
  const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const { name, email } = req.body

    if (!name || !email) {
      res.status(400).json({ message: 'Name and email are required' })
    }

    if (name.length < 3) {
      res.status(400).json({ message: 'Name must be at least 3 characters' })
    }

    if (!email.includes('@')) {
      res.status(400).json({ message: 'Email must be a valid email' })
    }

    next()
  }

  return {
    validateUser,
  }
}

export default userMiddleware
