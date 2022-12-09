import { Container } from '@mui/material'
import React from 'react'
import FlowerDescriptionCard from '../ui/flower-description-card/FlowerDescriptionCard'
import Header from '../ui/header/Header'

interface FlowerIdPageProps {
  flower: Flower
}

const FlowerIdPage = ({ flower }: FlowerIdPageProps) => {
  return (
    <>
      <Header />
      <Container maxWidth='lg' sx={{ marginTop: '175px' }}>
        <FlowerDescriptionCard flower={flower} />
      </Container>
    </>
  )
}

export default FlowerIdPage
