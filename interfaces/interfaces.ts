const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
}
const printVehicle = (vehicle: {
  name: string
  year: number
  broken: boolean
}): void => {
  console.log(`Name: ${vehicle.year}`)
}

printVehicle(oldCivic)

// instead of doing it this way, make an interface

type Vehicle = {
  name: string
  year: number
  broken: boolean
  summary(): string
}

const newCivic: Vehicle = {
  name: 'McLaren',
  year: 2019,
  broken: false,
  summary(): string {
    return `Name: ${this.name}, Year: ${this.year}`
  }
}

const tsPrintVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary)
}

tsPrintVehicle(newCivic)
