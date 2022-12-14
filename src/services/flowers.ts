import { api } from './config'

export const getAllFlowers = async () => {
  try {
    const response = await api.get('/flowers')
    return response.data
  } catch (error) {
    const err = new Error('Failed to get flowers list data')
    throw err
  }
}

export const getFlowerById = async (flowerId: string) => {
  try {
    const response = await api.get(`/flowers/${flowerId}`)
    return response.data
  } catch (error) {
    const err = new Error('Failed to get flower data')
    throw err
  }
}
