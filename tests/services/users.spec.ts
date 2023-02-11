import React from 'react'
import { createUser } from '../../src/services/users'

describe('createUser', () => {
  it('should create an user', async () => {
    const email = 'jose@email.com'
    const username = 'jose'
    const password = '123456'

    const userValues = { email, username, password }

    const registeredUser = await createUser(userValues)

    expect(registeredUser).toStrictEqual({
      id: 'random-id',
      email,
      username,
      password,
    })
  })
})
