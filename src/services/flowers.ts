import { api } from './config'

export const getFlowers = async () => {
  try {
    const response = await api.get('/flowers')
    return response.data
  } catch (error) {
    const err = new Error('Failed to get flowers list data')
    throw err
  }
}
