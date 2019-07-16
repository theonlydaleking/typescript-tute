const carMakers: string[] = ['ford', 'toyota', 'jeep']

//implicit
const dates = [new Date(), new Date()]

// this looks like string[][] (the last one is the outer bracket)
const carsByMake = [['cherokee', 'land cruiser'], ['chevy'], ['camaro']]

///////why do we care tho? ///////

// Automatically does type inference for us
const car = carMakers[0] //car will be of type string

// Prevent incompatible values
carMakers.push(100)

// it helps with shit like map
carMakers.map(car => {
  return car
})

//flexible Types
const importantDates: (string | Date)[] = ['2019', new Date()]
// this will stop you doing shit like
importantDates.push(100)
