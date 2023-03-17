import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { authService } from '../services/authService'

const AuthContext = createContext({} as AuthContextData)

const LOCAL_STORAGE_KEY_ACCESS_TOKEN = 'APP_ACCESS_TOKEN'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>()

  useEffect(() => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN)
    if (accessToken) {
      setAccessToken(JSON.parse(accessToken))
    } else {
      setAccessToken(undefined)
    }
  }, [])

  const handleLogin = useCallback(async (user: Partial<User>) => {
    const result = await authService.auth(user)
    if (result instanceof Error) {
      return result.message
    } else {
      localStorage.setItem(
        LOCAL_STORAGE_KEY_ACCESS_TOKEN,
        JSON.stringify(result.accessToken),
      )
      setAccessToken(result.accessToken)
    }
  }, [])

  const handleLogout = useCallback(() => {
    localStorage.removeItem(LOCAL_STORAGE_KEY_ACCESS_TOKEN)
    setAccessToken(undefined)
  }, [])

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
