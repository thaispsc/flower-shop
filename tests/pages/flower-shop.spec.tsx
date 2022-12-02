import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FlowerShop from '../../src/pages/flower-shop'
import { getServerSideProps } from '../../src/pages/flower-shop'
import { mockGetFlowersEndpoint } from '../__stubs__/http/endpoints/mockGetFlowersEndpoint'
import { mockServer } from '../__stubs__/http/mockServer'

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
  it('should render the whole flower shop page', async () => {
    const { request: mockedGetFlowersEndpoint } = mockGetFlowersEndpoint()
    mockServer.use(...[mockedGetFlowersEndpoint])

    await renderFlowerShopPage()

    const flowersNameList = ['Daisy', 'Sun Flower', 'White Rose', 'Orchild']
    flowersNameList.forEach(flowerName => {
      const flowerNameText = screen.getByText(flowerName)
      expect(flowerNameText).toBeVisible()
    })
  })
})
