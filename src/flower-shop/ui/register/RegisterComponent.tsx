import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import RegisterFlower from 'src/assets/images/RegisterFlower.jpg'
import { HomeIcon } from '../../../lib/components/HomeIcon'

const RegisterComponent = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

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
            <Typography variant='h2'>Register</Typography>
            <Link href='/flower-shop' underline='none'>
              <Box display='flex' gap={1} alignItems='center'>
                <HomeIcon />
                <Typography fontSize='18px'>Back to home</Typography>
              </Box>
            </Link>
          </Box>
          <Typography fontSize='18px' color='#838383' marginTop={2}>
            Register and help us help you
          </Typography>
          <TextField
            id='outlined-basic'
            label='Email'
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
            }}
          />
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
              marginY: '20px',
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
          <Typography
            fontSize='16px'
            color='#838383'
            marginTop={10}
            marginBottom='25px'
            textAlign='center'
          >
            With registering your accepting our
            <span style={{ color: '#FF8F52' }}> terms </span>
            and <span style={{ color: '#FF8F52' }}>privacy policy</span>
          </Typography>
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
              <Typography color='secondary'>Register</Typography>
            </Link>
          </Button>
          <Typography
            fontSize='20px'
            color='#838383'
            textAlign='center'
            marginTop={10}
            marginBottom={10}
          >
            Already have an account?{' '}
            <Link href='/login' underline='none'>
              Login
            </Link>
          </Typography>
        </Card>
        <Image src={RegisterFlower} alt='Flower' width={576} />
      </Grid>
    </Grid>
  )
}

export default RegisterComponent
