import { getFlowerById, getFlowers } from '../../src/services/flowers'
import FlowerFixture from '../__fixtures__/flowerFixture'
import {
  buildFlowerFoundResponse,
  mockGetFlowerByIdEndpoint,
} from '../__stubs__/http/endpoints/mockGetFlowerByIdEndpoint'
import { mockServer } from '../__stubs__/http/mockServer'

describe('getFlowers', () => {
  it('should return the list of flowers', async () => {
    const flowersList = await getFlowers()

    expect(flowersList).toBeDefined()
  })
})

describe('getFlowerById', () => {
  const flowerVariant = new FlowerFixture().build()

  const getFlowerOKResponse = buildFlowerFoundResponse(flowerVariant)
  const { request: mockedGetFlowerByIdEndpoint } = mockGetFlowerByIdEndpoint(
    flowerVariant.id,
    getFlowerOKResponse,
  )
  mockServer.use(...[mockedGetFlowerByIdEndpoint])

  it('should return a flower', async () => {
    const flower = await getFlowerById(flowerVariant.id)

    expect(flower).toBeDefined()
    expect(flower).toEqual(flowerVariant)
  })
})
