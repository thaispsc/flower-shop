import { render, screen } from '@testing-library/react'
import React from 'react'
import { ReviewCard } from '../../src/flower-shop/ui/review-card/ReviewCard'
import FlowerFixture from '../__fixtures__/flowerFixture'

describe('<ReviewCard />', () => {
  const flowerVariant = new FlowerFixture().build()

  it('should show all comments', () => {
    render(<ReviewCard flower={flowerVariant} />)

    const flowerReviews = flowerVariant.reviews

    flowerReviews.forEach(review => {
      const reviewComment = screen.getByText(review.comment)

      expect(reviewComment).toBeVisible()
    })
  })
})
