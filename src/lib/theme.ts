import { createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    h1: { fontFamily: 'Roboto', fontSize: '3.75rem', fontWeight: 400 },
    h2: { fontFamily: 'Roboto', fontSize: '2rem' },
    body1: {
      fontFamily: 'Roboto',
      fontSize: '1.25rem',
      fontWeight: '400',
      color: '#000000',
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    background: {
      default: '#000000',
    },
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    info: {
      main: '#FF8F52',
    },
  },
})

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0, // square corners

      textTransform: 'none', // removes uppercase transformation
    },

    containedPrimary: {
      '&:hover': {
        // changes colors for hover state

        backgroundColor: theme.palette.secondary.main,

        color: theme.palette.primary.dark,
      },
    },
  },
}

export default theme
