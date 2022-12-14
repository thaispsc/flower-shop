import { rest } from 'msw'
import FlowerFixture from '../../../__fixtures__/flowerFixture'
import { DataFound, DataNotFound } from './types'

type MockProps = DataFound<Flower> | DataNotFound

export const mockGetFlowerByIdEndpoint = (
  flowerId: string,
  { status, data }: MockProps,
) => ({
  ...data,
  request: rest.get(
    `http://localhost:3333/flowers/:flowerId`,
    (_req, res, ctx) => {
      return res(ctx.status(status), ctx.json(data))
    },
  ),
})

export const buildFlowerFoundResponse = (
  flower: Flower = new FlowerFixture().build(),
) => ({
  status: 200,
  data: flower,
})

export const buildFlowerNotFoundResponse = () => ({
  status: 404,
  data: {
    error: 'Flower not found',
  },
})
