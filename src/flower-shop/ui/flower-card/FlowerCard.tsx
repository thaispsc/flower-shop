import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import { Cart } from '../flower-card/Cart'

interface FlowerCardProps {
  flower: Flower
}

export const FlowerCard = ({ flower }: FlowerCardProps) => {
  return (
    <Card key={flower.id} sx={{ maxWidth: 287 }}>
      <Image src={flower.image} alt={'Flower'} width={320} height={250} />

      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {flower.name}
        </Typography>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Typography color='#838383' fontSize='18px'>
            R${flower.price}
          </Typography>
          <Button>
            <Cart />
            <Typography color='#FF8F52' fontSize='18px' marginLeft={1}>
              Add to cart
            </Typography>
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
