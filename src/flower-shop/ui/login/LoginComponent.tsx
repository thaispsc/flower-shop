import {
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import LoginFlower from 'src/assets/images/LoginFlower.jpg'
import { HomeIcon } from '../../../lib/components/HomeIcon'

const LoginComponent = () => {
  return (
    <Grid container display='flex'>
      <Grid item md={12} display='flex'>
        <Card variant='outlined' sx={{ paddingX: '48px', paddingY: '30px' }}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            marginTop={10}
          >
            <Typography variant='h2'>Login</Typography>
            <Link href='/flower-shop' underline='none'>
              <Box display='flex' gap={1} alignItems='center'>
                <HomeIcon />
                <Typography fontSize='18px'>Back to home</Typography>
              </Box>
            </Link>
          </Box>
          <Typography fontSize='18px' color='#838383' marginTop={2}>
            Login and have more fun
          </Typography>
          <TextField
            id='outlined-basic'
            label='Username'
            variant='outlined'
            sx={{
              width: '100%',
              '& .MuiFormLabel-root': {
                color: '#838383',
                fontSize: '18px',
              },
              '& .MuiOutlinedInput-root': {
                fontSize: '18px',
              },
              marginTop: '50px',
              marginBottom: '20px',
            }}
          />
          <TextField
            id='outlined-basic'
            label='Password'
            variant='outlined'
            type='password'
            sx={{
              width: '100%',
              '& .MuiFormLabel-root': {
                color: '#838383',
                fontSize: '18px',
              },
              '& .MuiOutlinedInput-root': {
                fontSize: '18px',
              },
            }}
          />
          <Box
            display='flex'
            alignItems='center'
            marginBottom={8}
            marginTop='20px'
          >
            <Checkbox />
            <Typography fontSize='16px' color='#838383' textAlign='center'>
              Remember me
            </Typography>
          </Box>
          <Button
            variant='contained'
            color='info'
            disableElevation
            sx={{
              width: '100%',
              paddingY: '13px',
              '&:hover': {
                backgroundColor: '#000000',
              },
            }}
          >
            <Link href={'/shop'} underline='none'>
              <Typography color='secondary'>Login</Typography>
            </Link>
          </Button>
          <Typography
            fontSize='20px'
            color='#838383'
            textAlign='center'
            marginTop={8}
            marginBottom={10}
          >
            Don't have an account?{' '}
            <Link href='/register' underline='none'>
              Register
            </Link>
          </Typography>
        </Card>
        <Image src={LoginFlower} alt='Flower' width={576} />
      </Grid>
    </Grid>
  )
}

export default LoginComponent
