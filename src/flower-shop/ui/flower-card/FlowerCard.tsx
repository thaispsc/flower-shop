import { Box, Card, CardContent, Typography } from '@mui/material'
import Flower1 from 'src/assets/images/Flower1.png'

interface FlowerCardProps {
  flower: Flower
}

export const FlowerCard = ({ flower }: FlowerCardProps) => {
  console.log(flower)
  return (
    <Card key={flower.id} sx={{ maxWidth: 287 }}>
      <Box>
        <img src={Flower1} alt='' />
      </Box>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {flower.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  )
}
