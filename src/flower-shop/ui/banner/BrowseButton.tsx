import { Button, Typography } from '@mui/material'

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
      <Typography color='secondary'>Browse</Typography>
    </Button>
  )
}

export default BrowseButton
