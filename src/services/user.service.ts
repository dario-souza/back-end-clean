import userRepository from '../repositories/user.repository'
import User from '../interfaces/user.interface'

const userService = () => {
  const getUsers = () => {
    return userRepository().getUsers()
  }

  const createUser = (user: User) => {
    const existingUser = userRepository().getUserById(user.id!)
    if (existingUser) {
      throw new Error('User already exists')
    }
    const newUser = userRepository().create(user)
    return newUser
  }

  const updateUser = (id: string, user: User) => {
    const existingUser = userRepository().getUserById(id)
    if (!existingUser) {
      throw new Error('User not found')
    }
    return userRepository().update(id, user)
  }

  const deleteUser = (id: string) => {
    const user = userRepository().getUserById(id)
    if (!user) {
      throw new Error('User not found')
    }
    userRepository().deleteUser(id)
  }

  const getUserById = (id: string) => {
    const user = userRepository().getUserById(id)
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }

  return {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
  }
}

export default userService
