import React from 'react'
import { render, screen } from '@testing-library/react'
import Shop from '../../src/pages/shop'
import { getServerSideProps } from '../../src/pages/flower-shop'
import {
  buildFlowersListFoundResponse,
  buildFlowersListNotFoundResponse,
  mockGetAllFlowersEndpoint,
} from '../__stubs__/http/endpoints/mockGetAllFlowersEndpoint'
import { mockServer } from '../__stubs__/http/mockServer'
import FlowersListFixture from '../__fixtures__/flowersListFixture'

const renderShopPage = async () => {
  const { props } = await getServerSideProps()
  return render(
    <>
      <Shop flowersList={props.flowersList} error={props.error} />
    </>,
  )
}

describe('getServerSideProps', () => {
  it('should return an array of objects', async () => {
    const { props } = await getServerSideProps()
    expect(props).toBeDefined()
  })
})

describe('shop', () => {
  const flowersList: Flower[] = new FlowersListFixture().build()
  it('should render the shop page with all flowers', async () => {
    const getFlowersListOKResponse = buildFlowersListFoundResponse(flowersList)
    const { request: mockedGetAllFlowersEndpoint } = mockGetAllFlowersEndpoint(
      getFlowersListOKResponse,
    )
    mockServer.use(...[mockedGetAllFlowersEndpoint])

    await renderShopPage()

    flowersList.forEach(flower => {
      const flowerName = screen.getByText(flower.name)
      expect(flowerName).toBeVisible()
    })
  })

  it('should render null if flowers list is not found', async () => {
    const getFlowersListNOTOKResponse = buildFlowersListNotFoundResponse()
    const { request: notFoundmockedGetAllFlowersEndpoint } =
      mockGetAllFlowersEndpoint(getFlowersListNOTOKResponse)

    mockServer.use(...[notFoundmockedGetAllFlowersEndpoint])

    await renderShopPage()
    const errorElem = screen.getByText('Something bad happened.')
    expect(errorElem).toBeVisible()
  })
})
