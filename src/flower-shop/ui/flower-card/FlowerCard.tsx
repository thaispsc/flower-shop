import { Box, Button, Card, CardContent, Link, Typography } from '@mui/material'
import Image from 'next/image'
import { SmallCartIcon } from '../../../lib/components/SmallCartIcon'

interface FlowerCardProps {
  flower: Flower
}

export const FlowerCard = ({ flower }: FlowerCardProps) => {
  return (
    <Link href={`/flowers/${flower.id}`} underline='none'>
      <Card
        key={flower.id}
        sx={{ maxWidth: 287, padding: '15px', borderRadius: '5px' }}
      >
        <Image
          src={flower.image}
          alt={'Flower'}
          width={240}
          height={240}
          style={{ borderRadius: '5px' }}
        />

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
              <SmallCartIcon fill='#FF8F52' />
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
