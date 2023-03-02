import { api } from './config'

export const createUser = async (user: Omit<User, 'id'>) => {
  try {
    const response = await api.post('/users', user)
    return response.data
  } catch (error) {
    const err = new Error('Failed to create new user')
    throw err
  }
}

export const loginUser = async (user: Partial<User>) => {
  try {
    const response = await api.post('/login', user)
    return response.data
  } catch (error) {
    const err = new Error('Failed to log user')
    throw err
  }
}
