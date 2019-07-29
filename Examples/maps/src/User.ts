import faker from 'faker'

export class User {
  // you define the object first
  name: string
  location: {
    lat: number
    lng: number
  }

  // then use the constructor to build it.
  constructor() {
    this.name = faker.name.firstName()
    // this.location.lat = 12 this will fail because constructor doesn't get called until after initialisation.
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}
