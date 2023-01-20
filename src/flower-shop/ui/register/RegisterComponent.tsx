import { Box, Card } from '@mui/material'
import Image from 'next/image'
import RegisterFlower from 'src/assets/images/RegisterFlower.jpg'

const RegisterComponent = () => {
  return (
    <Box display='flex'>
      <Card>
        <h1>Register</h1>
      </Card>
      <Image src={RegisterFlower} alt='Flower' height={632} />
    </Box>
  )
}

export default RegisterComponent
