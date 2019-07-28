// Always capitlaise the name of a class
class Vehicle {
  drive(): void {
    console.log('Vrooooom')
  }

  honk(): void {
    console.log('BEEEP')
  }
}

const vehicle = new Vehicle()
vehicle.drive()
vehicle.honk()

// All pretty standard stuff. Infact just the same as ES6 so far.

// Inheritance

class Car extends Vehicle {
  // A car is a type of vehicle. so it should inherit some shit
  // just like react btw.
  // You don't actually need super here because the parent doesn't have a constructer
  // Also you can overwirte shit like this
  drive(): void {
    console.log('fuckin... merrrrrrrr')
  }
}

const car = new Car()

car.drive()

// Private, vs Public vs Protected

class CarTwo {}

class PrivateCar extends CarTwo {
  // This fails because car has a public drive()
  // just remove it if you need, or change it to protected
  private drive(): void {
    console.log('Vrooooom')
  }

  startDriving(): void {
    this.drive()
  }
}

const privateCar = new PrivateCar()
// privateCar.honk()
// See this returns an error
// but this will work
privateCar.startDriving()

class ColourfulVehicle {
  constructor(colour: string) {
    this.colour = colour
  }

  colour: string
  // usually you initialise it immediately
  // if you don't want to tho?
  // you can just call it like:
  // constructor(public colour: string)
  // it usually happens this way, but this is verbose.
}

// Some inheritance stuff
const colourfulVehicle = new ColourfulVehicle('red')

console.log(colourfulVehicle.colour)

class ColourfulCar extends ColourfulVehicle {
  constructor(public wheels: number, colour: string) {
    super(colour)
  }
}

const colourfulCar = new ColourfulCar(1, 'red')
