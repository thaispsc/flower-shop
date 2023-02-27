import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterComponent from '../../src/flower-shop/ui/register/RegisterComponent'
import { createUser } from '../../src/services/users'

describe('<RegisterComponent>', () => {
  const users = { createUser }
  const createUserSpy = jest.spyOn(users, 'createUser')

  const typeEmail = async (email: string) => {
    const input = screen.getByLabelText('Email')
    await userEvent.type(input, email)
  }

  const typeUsername = async (username: string) => {
    const input = screen.getByLabelText('Username')
    await userEvent.type(input, username)
  }

  const typePassword = async (password: string) => {
    const input = screen.getByLabelText('Password')
    await userEvent.type(input, password)
  }

  const submitRegisterForm = async () => {
    const registerButton = screen.queryByRole('button', { name: /register/i })
    await userEvent.click(registerButton)
  }

  it('should create an user when the register button is clicked', async () => {
    createUserSpy.mockResolvedValue({})

    render(<RegisterComponent />)

    const email = 'thaispcavalcante@gmail.com'
    const username = 'thaispc'
    const password = '123456'

    await typeEmail(email)
    await typeUsername(username)
    await typePassword(password)

    await submitRegisterForm()

    expect(createUserSpy).toHaveBeenCalledTimes(1)
  })
})
