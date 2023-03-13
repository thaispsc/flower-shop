import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterComponent from '../../src/flower-shop/ui/register/RegisterComponent'
import { createUser } from '../../src/services/users'

jest.mock('../../src/services/users', () => ({
  createUser: jest.fn(),
}))

describe('<RegisterComponent>', () => {
  const typeEmail = async (email: string) => {
    const emailInput = screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, email)
  }

  const typeUsername = async (username: string) => {
    const usernameInput = screen.getByPlaceholderText('Username')
    await userEvent.type(usernameInput, username)
  }

  const typePassword = async (password: string) => {
    const passwordInput = screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, password)
  }

  const submitRegisterForm = async () => {
    const registerButton = screen.queryByRole('button', { name: /register/i })
    await userEvent.click(registerButton)
  }

  it('should create an user when the register button is clicked', async () => {
    render(<RegisterComponent />)

    const email = 'thaispcavalcante@gmail.com'
    const username = 'thaispc'
    const password = '123456'

    await typeEmail(email)
    await typeUsername(username)
    await typePassword(password)

    await submitRegisterForm()

    expect(createUser).toHaveBeenCalledWith({ email, username, password })
  })
})
