import { Container } from '@mui/material'
import LoginComponent from '../ui/login/LoginComponent'

const Login = () => {
  return (
    <Container sx={{ height: '98vh', display: 'flex', alignItems: 'center' }}>
      <LoginComponent />
    </Container>
  )
}

export default Login
