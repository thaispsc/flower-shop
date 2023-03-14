import { Box, Container, Grid } from '@mui/material'
import Banner from '../ui/banner/Banner'
import { BestSellers } from '../ui/best-sellers/BestSellers'
import { FlowerCard } from '../ui/flower-card/FlowerCard'
import Header from '../ui/header/Header'

export interface FlowerShopProps {
  flowers: Flower[]
}

const FlowerShop = ({ flowers }: FlowerShopProps) => {
  const bestSellersFlowers = flowers.slice(0, 4)

  return (
    <>
      <Header />
      <Container maxWidth='lg' sx={{ marginTop: '175px' }}>
        <Banner />
        <BestSellers />
        <Grid
          container
          display='flex'
          marginTop={4}
          justifyContent='space-between'
        >
          {bestSellersFlowers.map(flower => (
            <Grid item md={2.8} key={flower.id}>
              <FlowerCard flower={flower} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default FlowerShop
