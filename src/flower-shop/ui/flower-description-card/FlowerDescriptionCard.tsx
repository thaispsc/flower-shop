import { Button, Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import { Star } from '../../../lib/components/Star'
import { Cart } from '../../../lib/components/Cart'

interface FlowerDescriptionCardProps {
  flower: Flower
}

const FlowerDescriptionCard = ({ flower }: FlowerDescriptionCardProps) => {
  return (
    <>
      <Card sx={{ display: 'flex', padding: '50px', gap: '60px' }}>
        <Image src={flower.image} alt={'Flower'} width={320} height={250} />

        <CardContent sx={{ padding: 0 }}>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            lineHeight='25.78px'
          >
            {flower.name}
          </Typography>
          <Typography
            gutterBottom
            variant='body1'
            component='div'
            color='#838383'
            lineHeight='35px'
          >
            {flower.description}
          </Typography>
          <Box marginTop={2}>
            <Box display='flex' gap='10px' alignItems='center'>
              <Star />
              <Typography>4.5/5</Typography>
            </Box>
            <Typography color='#838383' fontSize='18px'>
              (101 people opinion)
            </Typography>
          </Box>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            marginTop={2}
          >
            <Typography>{flower.price}$ / each</Typography>
            <Button variant='contained' color='primary'>
              <Cart fill='#ffffff' />
              <Typography color='#FFFFFF' fontSize='18px' marginLeft={1}>
                Add to cart
              </Typography>
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default FlowerDescriptionCard
