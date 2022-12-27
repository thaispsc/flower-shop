import { faker } from '@faker-js/faker'

function generateDefaultFlowerParams(): Flower {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    image: faker.internet.url(),
    price: Number(faker.commerce.price()),
    description: faker.commerce.productDescription(),
    reviews: [
      {
        id: faker.datatype.string(),
        authorName: faker.name.fullName(),
        authorPhoto: faker.internet.avatar(),
        comment: faker.commerce.productAdjective(),
        stars: faker.datatype.number(),
      },
    ],
  }
}

export default class FlowerFixture {
  private flower: Flower

  constructor(flowerParams: Partial<Flower> = {}) {
    this.flower = { ...generateDefaultFlowerParams(), ...flowerParams }
  }

  build() {
    return this.flower
  }
}
