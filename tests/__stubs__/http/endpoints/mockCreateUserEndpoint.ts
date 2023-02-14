import { request } from 'http'
import { rest } from 'msw'
import UserFixture from '../../../__fixtures__/userFixture'
import { DataFound, DataNotFound } from './types'

type MockProps = DataFound<User> | DataNotFound

export const mockCreateUserEndpoint = ({ status, data }: MockProps) => ({
  ...data,
  request: rest.post(`http://localhost:3333/users`, (_req, res, ctx) => {
    return res(ctx.status(status), ctx.json(data))
  }),
})

export const buildUserFoundResponse = (
  user: User = new UserFixture().build(),
) => ({
  status: 200,
  data: user,
})

export const buildUserNotFoundResponse = () => ({
  status: 404,
  data: {
    error: 'User not found',
  },
})
