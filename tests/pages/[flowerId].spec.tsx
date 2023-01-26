import React from 'react'
import { render, screen } from '@testing-library/react'
import { getServerSideProps } from '../../src/pages/flowers/[flowerId]'
import FlowerIdPage from '../../src/pages/flowers/[flowerId]'
import FlowerFixture from '../__fixtures__/flowerFixture'
import {
  buildFlowerFoundResponse,
  buildFlowerNotFoundResponse,
  mockGetFlowerByIdEndpoint,
} from '../__stubs__/http/endpoints/mockGetFlowerByIdEndpoint'
import { mockServer } from '../__stubs__/http/mockServer'
import {
  buildFlowersListFoundResponse,
  mockGetAllFlowersEndpoint,
} from '../__stubs__/http/endpoints/mockGetAllFlowersEndpoint'
import FlowersListFixture from '../__fixtures__/flowersListFixture'

const renderFlowerIdPage = async (flower: Flower) => {
  const { props } = await getServerSideProps({
    params: { flowerId: flower.id },
  })
  return render(
    <>
      <FlowerIdPage
        flower={props.flower}
        error={props.error}
        flowersList={props.flowersList}
      />
    </>,
  )
}

describe('getServerSideProps', () => {
  it('should return a proper object', async () => {
    const flower = new FlowerFixture().build()
    const { props } = await getServerSideProps({
      params: { flowerId: flower.id },
    })

    expect(props).toBeDefined()
  })
})

describe('[flowerId]', () => {
  it('should render the whole flower page', async () => {
    const flower: Flower = new FlowerFixture().build()
    const flowersList: Flower[] = new FlowersListFixture().build()
    const getFlowerOKResponse = buildFlowerFoundResponse(flower)
    const getFlowersListOKResponse = buildFlowersListFoundResponse(flowersList)
    const { request: mockedGetFlowerEndpoint } = mockGetFlowerByIdEndpoint(
      flower.id,
      getFlowerOKResponse,
    )
    const { request: mockedGetAllFlowersEndpoint } = mockGetAllFlowersEndpoint(
      getFlowersListOKResponse,
    )

    mockServer.use(...[mockedGetFlowerEndpoint, mockedGetAllFlowersEndpoint])

    await renderFlowerIdPage(flower)

    const flowerNameText = screen.getByText(flower.name)

    expect(flowerNameText).toBeVisible()
  })

  it('should render null if flower is not found', async () => {
    const notFoundFlower = new FlowerFixture().build()
    const flowersList: Flower[] = new FlowersListFixture().build()
    const getFlowerNOTOKResponse = buildFlowerNotFoundResponse()
    const getFlowersListOKResponse = buildFlowersListFoundResponse(flowersList)
    const { request: notFoundmockedGetFlowerEndpoint } =
      mockGetFlowerByIdEndpoint(notFoundFlower.id, getFlowerNOTOKResponse)
    const { request: mockedGetAllFlowersEndpoint } = mockGetAllFlowersEndpoint(
      getFlowersListOKResponse,
    )

    mockServer.use(
      ...[notFoundmockedGetFlowerEndpoint, mockedGetAllFlowersEndpoint],
    )

    await renderFlowerIdPage(notFoundFlower)

    const errorElem = screen.getByText('Something bad happened.')
    expect(errorElem).toBeVisible()
  })
})
