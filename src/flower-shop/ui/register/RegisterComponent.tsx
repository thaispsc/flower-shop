import { Box, Card, Grid } from '@mui/material'
import Image from 'next/image'
import RegisterFlower from 'src/assets/images/RegisterFlower.jpg'

const RegisterComponent = () => {
  return (
    <Grid container display='flex'>
      <Grid item md={6}>
        <Card>
          <h1>Register</h1>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Image src={RegisterFlower} alt='Flower' width={576} />
      </Grid>
    </Grid>
  )
}

export default RegisterComponent
