import { GlobalStyles, ThemeProvider } from '@mui/material'
import theme from '../lib/theme'
import 'styles/fonts/roboto/roboto.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#dadada' },
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
