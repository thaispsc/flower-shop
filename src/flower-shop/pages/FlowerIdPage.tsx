import { Container, Grid } from '@mui/material'
import React from 'react'
import FlowerDescriptionCard from '../ui/flower-description-card/FlowerDescriptionCard'
import Header from '../ui/header/Header'
import { RelatedItemsCard } from '../ui/related-items-card/RelatedItemsCard'
import { ReviewCard } from '../ui/review-card/ReviewCard'

interface FlowerIdPageProps {
  flower: Flower
  flowers: Flower[]
}

const FlowerIdPage = ({ flower, flowers }: FlowerIdPageProps) => {
  return (
    <>
      <Header />
      <Container maxWidth='lg' sx={{ marginTop: '175px' }}>
        <FlowerDescriptionCard flower={flower} />
        <Grid container spacing={5}>
          <Grid item md={6}>
            <ReviewCard flower={flower} />
          </Grid>
          <Grid item md={6}>
            <RelatedItemsCard flowers={flowers} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default FlowerIdPage
