import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '@mui/material'
import theme from '../../src/lib/theme'
import { AuthProvider, useAuthContext } from '../../src/contexts/AuthContext'
import LoginComponent from '../../src/flower-shop/ui/login/LoginComponent'

jest.mock('../../src/contexts/AuthContext', () => ({
  login: jest.fn(),
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
    const { login } = useAuthContext()

    render(
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <LoginComponent />
        </ThemeProvider>
      </AuthProvider>,
    )

    const username = 'thaispc'
    const password = '123456'

    await typeUsername(username)
    await typePassword(password)

    await submitLoginForm()

    expect(login).toHaveBeenCalledWith({ username, password })
  })
})
