import { Container } from '@mui/material'
import RegisterComponent from '../ui/register/RegisterComponent'

const Register = () => {
  return (
    <Container sx={{ height: '98vh', display: 'flex', alignItems: 'center' }}>
      <RegisterComponent />
    </Container>
  )
}

export default Register
