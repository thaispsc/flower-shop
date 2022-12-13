import { Box, Button, Card, CardContent, Link, Typography } from '@mui/material'
import Image from 'next/image'
import { Cart } from '../../../lib/components/Cart'

interface FlowerCardProps {
  flower: Flower
}

export const FlowerCard = ({ flower }: FlowerCardProps) => {
  return (
    <Link href={`/flowers/${flower.id}`} underline='none'>
      <Card key={flower.id} sx={{ maxWidth: 287, padding: '15px' }}>
        <Image src={flower.image} alt={'Flower'} width={240} height={240} />

        <CardContent sx={{ padding: '15px 0 0 0' }}>
          <Typography gutterBottom variant='h5' component='div'>
            {flower.name}
          </Typography>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Typography color='#838383' fontSize='18px'>
              R${flower.price}
            </Typography>
            <Button>
              <Cart fill='#FF8F52' />
              <Typography color='#FF8F52' fontSize='18px' marginLeft={1}>
                Add to cart
              </Typography>
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}
