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
import { createUser } from '../../../services/users'
import * as yup from 'yup'

const RegisterComponent = () => {
  const registerValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email address is invalid')
      .required('Email is a required field'),
    username: yup
      .string()
      .required()
      .min(3, 'Username must be at least 3 characters'),
    password: yup
      .string()
      .required()
      .min(6, 'Password must be at least 6 characters'),
  })

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const registerUser = async () => {
    const userValues = { email, username, password }
    registerValidationSchema
      .validate(userValues, { abortEarly: false })
      .then(async () => {
        await createUser(userValues)
        window.location.href = `/flower-shop`
      })
      .catch((errors: yup.ValidationError) => {
        const validationErrors: { [key: string]: string } = {}
        errors.inner.forEach(error => {
          if (!error.path) return
          validationErrors[error.path] = error.message
        })
        setErrors(validationErrors)
      })
  }

  return (
    <Grid item md={12} display='flex'>
      <Card variant='outlined' sx={{ paddingX: '48px', paddingY: '30px' }}>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
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
          placeholder='Email'
          error={Boolean(errors.email)}
          helperText={errors.email}
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
          onChange={handleEmailChange}
        />
        <TextField
          id='outlined-basic'
          label='Username'
          variant='outlined'
          placeholder='Username'
          error={Boolean(errors.username)}
          helperText={errors.username}
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
          onChange={handleUsernameChange}
        />
        <TextField
          id='outlined-basic'
          label='Password'
          variant='outlined'
          type='password'
          placeholder='Password'
          error={Boolean(errors.password)}
          helperText={errors.password}
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
          onChange={handlePasswordChange}
        />
        <Typography
          fontSize='16px'
          color='#838383'
          marginTop={6}
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
          onClick={async () => {
            await registerUser()
          }}
        >
          <Link underline='none'>
            <Typography color='secondary'>Register</Typography>
          </Link>
        </Button>
        <Typography
          fontSize='20px'
          color='#838383'
          textAlign='center'
          marginTop={2}
          marginBottom={2}
        >
          Already have an account?{' '}
          <Link href='/login' underline='none'>
            Login
          </Link>
        </Typography>
      </Card>
      <Box height={633}>
        <Image src={RegisterFlower} alt='Flower' width={576} height={633} />
      </Box>
    </Grid>
  )
}

export default RegisterComponent
