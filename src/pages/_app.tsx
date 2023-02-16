import { GlobalStyles, ThemeProvider } from '@mui/material'
import theme from '../lib/theme'
import 'styles/fonts/roboto/roboto.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#F2F2F2', margin: 0 },
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
