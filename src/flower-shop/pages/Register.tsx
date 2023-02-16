import { Container, Box } from '@mui/material'
import RegisterComponent from '../ui/register/RegisterComponent'

const Register = () => {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <RegisterComponent />
    </Container>
  )
}

export default Register
