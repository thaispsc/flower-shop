import { GET_FLOWER_API_ENDPOINT } from '../infra/apiRoutes'
import httpClient from '../infra/httpClient'

interface GetFlowerResponse {
  flower: Flower
}

interface GetFlowerProps {
  flowerId: number
  bearerToken: string
}

export const getFlowerById = async ({
  flowerId,
  bearerToken,
}: GetFlowerProps) => {
  try {
    const { data } = await httpClient.get<GetFlowerResponse>(
      GET_FLOWER_API_ENDPOINT(flowerId),
      { headers: { Authorization: `Bearer ${bearerToken}` } },
    )

    return data.flower
  } catch (err) {
    const error = new Error('Failed to get flower data')
    throw error
  }
}

export default getFlowerById
