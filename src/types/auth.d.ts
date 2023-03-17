interface AuthContextData {
  isAuthenticated: boolean
  logout: () => void
  login: (user: Partial<User>) => Promise<string | void>
}
