import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginComponent from '../../src/flower-shop/ui/login/LoginComponent'
import { loginUser } from '../../src/services/users'
import { ThemeProvider } from '@mui/material'
import theme from '../../src/lib/theme'

jest.mock('../../src/services/users', () => ({
  loginUser: jest.fn(),
}))

describe('<LoginComponent>', () => {
  const typeUsername = async (username: string) => {
    const usernameInput = screen.getByPlaceholderText('Username')
    await userEvent.type(usernameInput, username)
  }

  const typePassword = async (password: string) => {
    const passwordInput = screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, password)
  }

  const submitLoginForm = async () => {
    const loginButton = screen.queryByRole('button', { name: /login/i })
    await userEvent.click(loginButton)
  }

  it('should login an user when the login button is clicked', async () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginComponent />
      </ThemeProvider>,
    )

    const username = 'thaispc'
    const password = '123456'

    await typeUsername(username)
    await typePassword(password)

    await submitLoginForm()

    expect(loginUser).toHaveBeenCalledWith({ username, password })
  })
})
