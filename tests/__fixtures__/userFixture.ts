import { faker } from '@faker-js/faker'

function generateDefaultUserParams(): User {
  return {
    id: faker.datatype.uuid(),
    username: faker.datatype.uuid(),
    password: faker.datatype.string(),
  }
}

export default class UserFixture {
  private user: User

  constructor(userParams: Partial<User> = {}) {
    this.user = { ...generateDefaultUserParams(), ...userParams }
  }

  build() {
    return this.user
  }
}
