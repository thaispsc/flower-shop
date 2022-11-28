import { api } from './config'

export const getFlowers = async () => {
  try {
    const response = await api.get('/flowers')
    return response.data
  } catch (error) {
    alert(`Error: ${error.response.data}`)
  }
}
