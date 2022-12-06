import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FlowerShop from '../../src/pages/flower-shop'
import { getServerSideProps } from '../../src/pages/flower-shop'
import {
  buildFlowersListFoundResponse,
  mockGetFlowersEndpoint,
} from '../__stubs__/http/endpoints/mockGetFlowersEndpoint'
import { mockServer } from '../__stubs__/http/mockServer'
import FlowerFixture from '../__fixtures__/flowerFixture'

const renderFlowerShopPage = async () => {
  const { props } = await getServerSideProps()
  return render(
    <>
      <FlowerShop flowersList={props.flowersList} error={props.error} />
    </>,
  )
}

describe('getServerSideProps', () => {
  it('should return a array of objects', async () => {
    const { props } = await getServerSideProps()
    expect(props).toBeDefined()
  })
})

describe('flower-shop', () => {
  const flowersList: Flower[] = [
    new FlowerFixture().build(),
    new FlowerFixture().build(),
    new FlowerFixture().build(),
    new FlowerFixture().build(),
  ]
  it('should render the whole flower shop page', async () => {
    const getFlowersListOKResponse = buildFlowersListFoundResponse(flowersList)
    const { request: mockedGetFlowersEndpoint } = mockGetFlowersEndpoint(
      getFlowersListOKResponse,
    )
    mockServer.use(...[mockedGetFlowersEndpoint])
    console.log(mockedGetFlowersEndpoint)

    await renderFlowerShopPage()

    flowersList.forEach(flower => {
      const flowerName = screen.getByText(flower.name)
      expect(flowerName).toBeVisible()
    })
  })
})
