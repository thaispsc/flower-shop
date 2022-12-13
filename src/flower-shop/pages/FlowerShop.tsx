import { Box, Container } from '@mui/material'
import Banner from '../ui/banner/Banner'
import { BestSellers } from '../ui/best-sellers/BestSellers'
import { FlowerCard } from '../ui/flower-card/FlowerCard'
import Header from '../ui/header/Header'

export interface FlowerShopProps {
  flowers: Flower[]
}

const FlowerShop = ({ flowers }: FlowerShopProps) => {
  return (
    <>
      <Header />
      <Container maxWidth='lg' sx={{ marginTop: '175px' }}>
        <Banner />
        <BestSellers />
        <Box display='flex' marginTop={4} justifyContent='space-between'>
          {flowers.map(flower => (
            <>
              <FlowerCard flower={flower} />
            </>
          ))}
        </Box>
      </Container>
    </>
  )
}

export default FlowerShop
