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
    const existingUser = await api.get(
      `/users?username=${user.username}&password=${user.password}`,
    )

    if (existingUser.data.length === 0) {
      throw new Error('Invalid username or password')
    }
    const response = await api.post('/login', user)
    return response.data
  } catch (error) {
    const err = new Error('Failed to log user')
    throw err
  }
}
