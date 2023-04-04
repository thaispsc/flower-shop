import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '@mui/material'
import theme from '../../src/lib/theme'
import LoginComponent from '../../src/flower-shop/ui/login/LoginComponent'
import { useAuthContext } from '../../src/contexts/AuthContext'

jest.mock('../../src/contexts/AuthContext', () => ({
  useAuthContext: () => ({
    login: jest.fn(),
  }),
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

  it('should display error message if username and password are not entered', async () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginComponent />
      </ThemeProvider>,
    )

    await submitLoginForm()
    await waitFor(() => {
      screen.getByText('Username must be at least 3 characters')
    })
    expect(
      screen.getByText('Username must be at least 3 characters'),
    ).toBeVisible()
    expect(
      screen.getByText('Password must be at least 6 characters'),
    ).toBeVisible()
  })

  // it('should login an user when the login button is clicked', async () => {
  //   const { login } = useAuthContext()
  //   render(
  //     <ThemeProvider theme={theme}>
  //       <LoginComponent />
  //     </ThemeProvider>,
  //   )

  //   const username = 'jose'
  //   const password = '123456'

  //   await typeUsername(username)
  //   await typePassword(password)

  //   await submitLoginForm()

  //   expect(login).toHaveBeenCalledWith({ username, password })
  // })
})
