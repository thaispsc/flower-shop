import { Box, Button, Card, CardContent, Link, Typography } from '@mui/material'
import Image from 'next/image'
import { Cart } from '../../../lib/components/Cart'
import { Star } from '../../../lib/components/Star'

interface FlowerCardProps {
  flower: Flower
}

export const ReviewCard = ({ flower }: FlowerCardProps) => {
  return (
    <Card
      key={flower.id}
      sx={{
        maxWidth: '45%',
        padding: '15px',
        borderRadius: '5px',
        marginTop: '37px',
      }}
    >
      <CardContent sx={{ padding: '15px' }}>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='h5' fontWeight={500}>
            Reviews
          </Typography>
          <Typography variant='h5' color='#FF8F52'>
            Add a review
          </Typography>
        </Box>

        <Box marginTop={3}>
          {flower.reviews.map(review => (
            <Box
              key={review.id}
              display='flex'
              gap={2}
              alignItems='center'
              marginTop={2}
            >
              <Image
                src={review.authorPhoto}
                alt='Author photo'
                width={75}
                height={75}
                style={{ borderRadius: '100%' }}
              />
              <Box>
                <Typography variant='body1' fontWeight={500}>
                  {review.authorName}
                </Typography>
                <Typography variant='body1' color='#838383' lineHeight='35px'>
                  {review.comment}
                </Typography>
                {Array.from({ length: review.stars }).map((_, index) => (
                  <Star key={index} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
