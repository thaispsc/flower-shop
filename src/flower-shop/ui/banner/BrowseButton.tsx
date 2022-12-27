import { Button, Typography, Link } from '@mui/material'

const BrowseButton = () => {
  return (
    <Button
      variant='contained'
      color='info'
      disableElevation
      sx={{
        '&:hover': {
          backgroundColor: '#000000',
        },
      }}
    >
      <Link href={'/shop'} underline='none'>
        <Typography color='secondary'>Browse</Typography>
      </Link>
    </Button>
  )
}

export default BrowseButton
