import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const Logo = () => {
  return (
    <Box display='flex' gap='7px'>
      <Typography variant='h2' fontWeight={500} color='#FF8F52'>
        Flower
      </Typography>
      <Typography variant='h2' fontWeight={500} color='#000000'>
        Shop
      </Typography>
    </Box>
  )
}

export default Logo
