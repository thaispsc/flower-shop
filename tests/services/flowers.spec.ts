import { getFlowers } from '../../src/services/flowers'

describe('getFlowers', () => {
  it('should return the list of flowers', async () => {
    const flowersList = await getFlowers()

    expect(flowersList).toBeDefined()
  })
})
