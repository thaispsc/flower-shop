import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Flower1 from 'src/assets/images/Flower1.png'
import Flower2 from 'src/assets/images/Flower2.png'
import Flower3 from 'src/assets/images/Flower3.png'
import Flower4 from 'src/assets/images/Flower4.png'
import Flower5 from 'src/assets/images/Flower5.png'
import Flower6 from 'src/assets/images/Flower6.png'
import BrowseButton from './BrowseButton'

const Banner = () => {
  return (
    <Grid
      container
      sx={{ justifyContent: { xs: 'center', md: 'space-between' } }}
    >
      <Grid item xs={12} md={4}>
        <Typography variant='h1' color='#121212'>
          Flowers, &#x1F33B; what the world needs
        </Typography>
        <Typography variant='body1' marginY={4.5} color='#838383'>
          Browse between hounders of flowers
        </Typography>
        <BrowseButton />
      </Grid>
      <Grid item md={8} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box display='flex' flexWrap='wrap' gap={2.5} justifyContent='flex-end'>
          <Image src={Flower1} alt={'Flower'} />
          <Image src={Flower2} alt={'Flower'} />
          <Image src={Flower3} alt={'Flower'} />
          <Image src={Flower4} alt={'Flower'} />
          <Image src={Flower5} alt={'Flower'} />
          <Image src={Flower6} alt={'Flower'} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Banner
