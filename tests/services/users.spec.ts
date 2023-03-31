import React from 'react'
import { createUser } from '../../src/services/users'
import UserFixture from '../__fixtures__/userFixture'
import {
  buildUserFoundResponse,
  mockCreateUserEndpoint,
} from '../__stubs__/http/endpoints/mockCreateUserEndpoint'
import { mockServer } from '../__stubs__/http/mockServer'

describe('createUser', () => {
  it('should create an user', async () => {
    const userVariant = new UserFixture().build()

    const createUserOkResponse = buildUserFoundResponse(userVariant)
    const { request: mockedCreateUserEndpoint } =
      mockCreateUserEndpoint(createUserOkResponse)

    mockServer.use(...[mockedCreateUserEndpoint])

    const email = userVariant.email
    const username = userVariant.username
    const password = userVariant.password

    const registeredUser = await createUser({ email, username, password })

    expect(registeredUser).toHaveProperty('id', userVariant.id)
  })
})
