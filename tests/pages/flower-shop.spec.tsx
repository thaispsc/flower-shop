import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FlowerShop from '../../src/pages/flower-shop'
import { getServerSideProps } from '../../src/pages/flower-shop'
import {
  buildFlowersListFoundResponse,
  buildFlowersListNotFoundResponse,
  mockGetAllFlowersEndpoint,
} from '../__stubs__/http/endpoints/mockGetAllFlowersEndpoint'
import { mockServer } from '../__stubs__/http/mockServer'
import FlowersListFixture from '../__fixtures__/flowersListFixture'

const renderFlowerShopPage = async () => {
  const { props } = await getServerSideProps()
  return render(
    <>
      <FlowerShop flowersList={props.flowersList} error={props.error} />
    </>,
  )
}

function mockLocationHref() {
  delete window.location
  window.location = {}
  const getHrefSpy = jest.fn()
  const setHrefSpy = jest.fn()
  Object.defineProperty(window.location, 'href', {
    get: getHrefSpy,
    set: setHrefSpy,
  })

  return {
    getHrefSpy,
    setHrefSpy,
  }
}
describe('getServerSideProps', () => {
  it('should return an array of objects', async () => {
    const { props } = await getServerSideProps()
    expect(props).toBeDefined()
  })
})

describe('flower-shop', () => {
  const flowersList: Flower[] = new FlowersListFixture().build()
  it('should render the whole flower shop page', async () => {
    const getFlowersListOKResponse = buildFlowersListFoundResponse(flowersList)
    const { request: mockedGetAllFlowersEndpoint } = mockGetAllFlowersEndpoint(
      getFlowersListOKResponse,
    )
    mockServer.use(...[mockedGetAllFlowersEndpoint])

    await renderFlowerShopPage()

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

    await renderFlowerShopPage()
    const errorElem = screen.getByText('Something bad happened.')
    expect(errorElem).toBeVisible()
  })

  // it('should redirect to shop page when the browse button is clicked', async () => {
  //   const getFlowersListOKResponse = buildFlowersListFoundResponse(flowersList)
  //   const { request: mockedGetAllFlowersEndpoint } = mockGetAllFlowersEndpoint(
  //     getFlowersListOKResponse,
  //   )
  //   mockServer.use(...[mockedGetAllFlowersEndpoint])

  //   await renderFlowerShopPage()

  //   const { setHrefSpy } = mockLocationHref()

  //   const button = screen.getAlByText('Browse')

  //   userEvent.click(button)
  //   expect(setHrefSpy).toHaveBeenCalled()
  // })
})
