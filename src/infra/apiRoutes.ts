import { FLOWER_SHOP_URL } from '../lib/constants/enviroments'

export const GET_FLOWER_API_ENDPOINT = (flowerId: number) =>
  `${FLOWER_SHOP_URL}/${flowerId}`

export const GET_ALL_FLOWERS_API_ENDPOINT = () => `${FLOWER_SHOP_URL}`
