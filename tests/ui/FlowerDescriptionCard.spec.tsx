import { render, screen } from '@testing-library/react'
import React from 'react'
import FlowerDescriptionCard from '../../src/flower-shop/ui/flower-description-card/FlowerDescriptionCard'
import FlowerFixture from '../__fixtures__/flowerFixture'

describe('<FlowerDescriptionCard />', () => {
  const flowerVariant = new FlowerFixture().build()

  it('should show the flower name correctly', () => {
    render(<FlowerDescriptionCard flower={flowerVariant} />)

    const flowerName = screen.getByText(flowerVariant.name)

    expect(flowerName).toBeVisible()
  })
})
