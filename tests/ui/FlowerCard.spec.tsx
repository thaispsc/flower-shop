import { render, screen } from '@testing-library/react'
import React from 'react'
import { FlowerCard } from '../../src/flower-shop/ui/flower-card/FlowerCard'
import FlowerFixture from '../__fixtures__/flowerFixture'

describe('<FlowerCard />', () => {
  const flowerVariant = new FlowerFixture().build()

  it('should show the flower name correctly', () => {
    render(<FlowerCard flower={flowerVariant} />)

    const flowerName = screen.getByText(flowerVariant.name)

    expect(flowerName).toBeVisible()
  })
})
