import { GlobalStyles, ThemeProvider } from '@mui/material'
import theme from '../lib/theme'
import 'styles/fonts/roboto/roboto.css'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: { backgroundColor: '#F2F2F2', margin: 0 },
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
