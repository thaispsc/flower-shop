import { Box, Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'

interface RelatedItemsCardProps {
  flowers: Flower[]
}

export const RelatedItemsCard = ({ flowers }: RelatedItemsCardProps) => {
  function shuffle(array: Flower[]) {
    return array.sort(() => Math.random() - 0.5)
  }

  const relatedFlowers = shuffle(flowers).slice(0, 4)

  return (
    <Card
      sx={{
        padding: '15px',
        borderRadius: '5px',
        marginTop: '37px',
      }}
    >
      <CardContent sx={{ padding: '15px' }}>
        <Box>
          <Typography variant='h5'>Maybe you like...</Typography>
        </Box>
        <Box
          display='flex'
          flexWrap='wrap'
          width='100%'
          justifyContent='space-around'
        >
          {relatedFlowers.map(flower => (
            <Box key={flower.id} marginTop={3}>
              <Image
                src={flower.image}
                alt='related flower'
                width={220}
                height={220}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}
