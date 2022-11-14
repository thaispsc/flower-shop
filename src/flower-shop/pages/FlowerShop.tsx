import { Container } from '@mui/material'
import Banner from '../ui/banner/Banner'
import Header from '../ui/header/Header'

const FlowerShop = () => {
  return (
    <>
      <Header />
      <Container maxWidth='lg' sx={{ marginTop: '175px' }}>
        <Banner />
      </Container>
    </>
  )
}

export default FlowerShop
