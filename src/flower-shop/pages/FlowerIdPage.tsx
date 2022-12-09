import { Container } from '@mui/material'
import React from 'react'
import Header from '../ui/header/Header'

interface FlowerIdPageProps {
  flower: Flower
}

const FlowerIdPage = ({ flower }: FlowerIdPageProps) => {
  return (
    <>
      <Header />
      <Container maxWidth='lg' sx={{ marginTop: '175px' }}>
        <h1>{flower.name}</h1>
      </Container>
    </>
  )
}

export default FlowerIdPage
