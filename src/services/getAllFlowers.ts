import { GET_ALL_FLOWERS_API_ENDPOINT } from '../infra/apiRoutes'
import httpClient from '../infra/httpClient'

interface GetAllFlowersResponse {
  flowers: Flower[]
}

interface GetAllFlowersProps {
  bearerToken: string
}

export const getAllFlowers = async ({ bearerToken }: GetAllFlowersProps) => {
  try {
    const { data } = await httpClient.get<GetAllFlowersResponse>(
      GET_ALL_FLOWERS_API_ENDPOINT(),
      { headers: { Authorization: `Bearer ${bearerToken}` } },
    )

    return data.flowers
  } catch (err) {
    const error = new Error('Failed to get flower data')
    throw error
  }
}

export default getAllFlowers
