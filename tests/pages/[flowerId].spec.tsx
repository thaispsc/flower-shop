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

const renderFlowerIdPage = async (flower: Flower) => {
  const { props } = await getServerSideProps({
    params: { flowerId: flower.id },
  })
  return render(
    <>
      <FlowerIdPage flower={props.flower} error={props.error} />
    </>,
  )
}

const flower = new FlowerFixture().build()

describe('getServerSideProps', () => {
  it('should return a proper object', async () => {
    const { props } = await getServerSideProps({
      params: { flowerId: flower.id },
    })

    expect(props).toBeDefined()
  })
})

describe('[flowerId]', () => {
  it('should render the whole flower page', async () => {
    const getFlowerOKResponse = buildFlowerFoundResponse(flower)
    const { request: mockedGetFlowerEndpoint } = mockGetFlowerByIdEndpoint(
      flower.id,
      getFlowerOKResponse,
    )
    mockServer.use(...[mockedGetFlowerEndpoint])

    await renderFlowerIdPage(flower)

    const flowerNameText = screen.getByText(flower.name)

    expect(flowerNameText).toBeVisible()
  })

  it('should render null if flowers list is not found', async () => {
    const getFlowerNOTOKResponse = buildFlowerNotFoundResponse()
    const { request: notFoundmockedGetAllFlowersEndpoint } =
      mockGetFlowerByIdEndpoint(flower.id, getFlowerNOTOKResponse)

    mockServer.use(...[notFoundmockedGetAllFlowersEndpoint])

    await renderFlowerIdPage(flower)

    const errorElem = screen.getByText('Something bad happened.')
    expect(errorElem).toBeVisible()
  })
})
