import { api } from './config'

const auth = async (user: Partial<User>) => {
  try {
    const response = await api.get('/auth')
    return response.data
  } catch (error) {
    const err = new Error('Failed to login')
    throw err
  }
}

export const authService = {
  auth,
}
