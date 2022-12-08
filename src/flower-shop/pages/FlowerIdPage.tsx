import React from 'react'

interface FlowerIdPageProps {
  flower: Flower
}

const FlowerIdPage = ({ flower }: FlowerIdPageProps) => {
  return (
    <>
      <h1>{flower.name}</h1>
    </>
  )
}

export default FlowerIdPage
