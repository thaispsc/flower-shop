import {
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  Link,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import LoginFlower from 'src/assets/images/LoginFlower.jpg'
import { HomeIcon } from '../../../lib/components/HomeIcon'
import { getUser, loginUser } from '../../../services/users'
import * as yup from 'yup'
import { useAuthContext } from '../../../contexts/AuthContext'

const LoginComponent = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const { login } = useAuthContext()

  const loginValidationSchema = yup.object().shape({
    username: yup
      .string()
      .required()
      .min(3, 'Username must be at least 3 characters'),
    password: yup
      .string()
      .required()
      .min(6, 'Password must be at least 6 characters'),
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const SignInUser = async () => {
    const userValues = { username, password }
    loginValidationSchema
      .validate(userValues, { abortEarly: false })
      .then(async () => {
        const userData = await getUser(userValues)
        if (userData.length !== 0) {
          login(userValues)
          window.location.href = `/flower-shop`
        } else {
          setErrors({ userError: 'Usuário não encontrado' })
        }
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
            marginTop: '50px',
            marginBottom: '20px',
          }}
          onKeyDown={() => setErrors({ username: '' })}
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
          onKeyDown={() => setErrors({ password: '' })}
          onChange={handlePasswordChange}
        />
        <Box
          display='flex'
          alignItems='center'
          marginBottom={4}
          marginTop='20px'
        >
          <Checkbox />
          <Typography fontSize='16px' color='#838383' textAlign='center'>
            Remember me
          </Typography>
        </Box>
        {errors.userError && (
          <Box>
            <Typography fontSize='20px' color='#cf0505' textAlign='center'>
              That account doesn't exist.
            </Typography>
            <Typography fontSize='20px' color='#cf0505' textAlign='center'>
              Enter a different account or{' '}
              <Link href='/register' underline='none'>
                get a new one!
              </Link>
            </Typography>
          </Box>
        )}
        <Button
          variant='contained'
          color='info'
          disableElevation
          sx={{
            width: '100%',
            marginTop: '32px',
            paddingY: '13px',
            '&:hover': {
              backgroundColor: '#000000',
            },
          }}
          onClick={async () => {
            await SignInUser()
          }}
        >
          <Link underline='none'>
            <Typography color='secondary'>Login</Typography>
          </Link>
        </Button>
        <Typography
          fontSize='20px'
          color='#838383'
          textAlign='center'
          marginTop={2}
          marginBottom={2}
        >
          Don't have an account?{' '}
          <Link href='/register' underline='none'>
            Register
          </Link>
        </Typography>
      </Card>
      {!isMobile && (
        <Box height={633}>
          <Image src={LoginFlower} alt='Flower' width={576} height={633} />
        </Box>
      )}
    </Grid>
  )
}

export default LoginComponent
