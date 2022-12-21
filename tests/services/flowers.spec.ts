import { getFlowerById, getAllFlowers } from '../../src/services/flowers'
import FlowerFixture from '../__fixtures__/flowerFixture'
import FlowersListFixture from '../__fixtures__/flowersListFixture'
import {
  buildFlowersListFoundResponse,
  mockGetAllFlowersEndpoint,
} from '../__stubs__/http/endpoints/mockGetAllFlowersEndpoint'
import {
  buildFlowerFoundResponse,
  mockGetFlowerByIdEndpoint,
} from '../__stubs__/http/endpoints/mockGetFlowerByIdEndpoint'
import { mockServer } from '../__stubs__/http/mockServer'

describe('getFlowers', () => {
  it('should return the list of flowers', async () => {
    const flowersListVariant = new FlowersListFixture().build()
    const getFlowerListOKResponse =
      buildFlowersListFoundResponse(flowersListVariant)
    const { request: mockedGetFlowersListEndpoint } = mockGetAllFlowersEndpoint(
      getFlowerListOKResponse,
    )
    mockServer.use(...[mockedGetFlowersListEndpoint])

    const flowersList = await getAllFlowers()
    expect(flowersList).toBeDefined()
    expect(flowersList).toEqual(flowersListVariant)
  })
})

describe('getFlowerById', () => {
  it('should return a flower', async () => {
    const flowerVariant = new FlowerFixture().build()

    const getFlowerOKResponse = buildFlowerFoundResponse(flowerVariant)
    const { request: mockedGetFlowerByIdEndpoint } = mockGetFlowerByIdEndpoint(
      flowerVariant.id,
      getFlowerOKResponse,
    )
    mockServer.use(...[mockedGetFlowerByIdEndpoint])

    const flower = await getFlowerById(flowerVariant.id)

    expect(flower).toBeDefined()
    expect(flower).toEqual(flowerVariant)
  })
})
