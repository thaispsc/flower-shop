import { faker } from '@faker-js/faker'
import FlowerFixture from './flowerFixture'

export default class FlowersListFixture {
  private flowersList: Flower[]

  constructor() {
    this.flowersList = Array.from({
      length: faker.datatype.number({ min: 1, max: 10 }),
    }).map(() => new FlowerFixture().build())
  }

  build() {
    return this.flowersList
  }
}
