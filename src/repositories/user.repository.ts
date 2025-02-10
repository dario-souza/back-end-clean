import { randomUUID } from 'crypto'
import User from '../interfaces/user.interface'
const users: User[] = []

const userRepository = () => {
  const getUsers = () => {
    return users
  }

  const create = (userData: User) => {
    const existingUser = users.find((user) => user.email === userData.email)
    if (existingUser) {
      throw new Error('User already exists')
    }
    const newUser = { ...userData, id: randomUUID() }
    users.push(newUser)
    return newUser
  }

  const update = (id: string, user: User) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
      users[index] = user
    }
    return users[index]
  }

  const deleteUser = (id: string) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
      users.splice(index, 1)
    }
  }

  const getUserById = (id: string) => {
    return users.find((user) => user.id === id)
  }

  return {
    getUsers,
    create,
    update,
    deleteUser,
    getUserById,
  }
}

export default userRepository
