import { rest } from 'msw'
import FlowersListFixture from '../../../__fixtures__/flowersListFixture'
import { DataFound, DataNotFound } from './types'

type MockProps = DataFound | DataNotFound

export const mockGetAllFlowersEndpoint = ({ status, data }: MockProps) => ({
  ...data,
  request: rest.get('http://localhost:3333/flowers', (_req, res, ctx) => {
    return res(ctx.status(status), ctx.json(data))
  }),
})

export const buildFlowersListFoundResponse = (
  flowersList: Flower[] = new FlowersListFixture().build(),
) => ({
  status: 200,
  data: flowersList,
})

export const buildFlowersListNotFoundResponse = () => ({
  status: 404,
  data: {
    error: 'Flowers list not found',
  },
})
