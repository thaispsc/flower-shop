import { Box, Card, Grid, Link, Typography } from '@mui/material'
import Image from 'next/image'
import RegisterFlower from 'src/assets/images/RegisterFlower.jpg'
import { Home } from './Home'

const RegisterComponent = () => {
  return (
    <Grid container display='flex'>
      <Grid item md={6}>
        <Card sx={{ paddingX: '48px', paddingY: '30px' }}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <Typography variant='h2'>Register</Typography>
            <Link href='/flower-shop' underline='none'>
              <Box display='flex' gap={1} alignItems='center'>
                <Home />
                <Typography fontSize='18px'>Back to home</Typography>
              </Box>
            </Link>
          </Box>
          <Typography fontSize='18px' color='#838383' marginTop={2}>
            Register and help us help you
          </Typography>
        </Card>
      </Grid>
      <Grid item md={6}>
        <Image src={RegisterFlower} alt='Flower' width={576} />
      </Grid>
    </Grid>
  )
}

export default RegisterComponent
