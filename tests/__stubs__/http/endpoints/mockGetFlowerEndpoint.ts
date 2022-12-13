import { rest } from 'msw'
import FlowerFixture from '../../../__fixtures__/flowerFixture'
import { DataFound, DataNotFound } from './types'

type MockProps = DataFound | DataNotFound

export const mockGetFlowerEndpoint = (
  flowerId: string,
  { status, data }: MockProps,
) => ({
  ...data,
  request: rest.get(
    `http://localhost:3333/flowers/${flowerId}`,
    (_req, res, ctx) => {
      return res(ctx.status(status), ctx.json(data))
    },
  ),
})

export const buildFlowersListFoundResponse = (
  flower: Flower = new FlowerFixture().build(),
) => ({
  status: 200,
  data: flower,
})

export const buildFlowersListNotFoundResponse = () => ({
  status: 404,
  data: {
    error: 'Flowers list not found',
  },
})