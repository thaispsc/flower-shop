import React from 'react'
import { render, screen } from '@testing-library/react'
import Banner from '../../src/flower-shop/ui/banner/Banner'
import '@testing-library/jest-dom'

describe('<Banner />', () => {
  it('should have the right text', () => {
    render(<Banner />)
    const text = screen.getByText('Flowers, 🌻 what the world needs')
    expect(text).toBeVisible()
  }),
    it('should show a browse button', () => {
      render(<Banner />)
      const button = screen.getByRole('button')
      expect(button).toHaveTextContent('Browse')
    })
})
