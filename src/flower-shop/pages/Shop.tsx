import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { FlowerCard } from '../ui/flower-card/FlowerCard'
import Header from '../ui/header/Header'

interface FlowerIdPageProps {
  flowers: Flower[]
}

const Shop = ({ flowers }: FlowerIdPageProps) => {
  return (
    <>
      <Header />
      <Container maxWidth='lg' sx={{ marginTop: '175px' }}>
        <Grid
          container
          display='flex'
          marginTop={4}
          justifyContent='center'
          gap={3}
        >
          {flowers.map(flower => (
            <Grid item key={flower.id}>
              <FlowerCard flower={flower} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Shop
