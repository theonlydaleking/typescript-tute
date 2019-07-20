// objects look like they work fine
const drink = {
  colour: 'brown',
  carbonated: true,
  sugar: 40
}

// tuples also work tho 

const pepsi = ['brown', true, 40]
//  if you look at this, it'll give you type: 
// (string | bool | number)
// so you can just move shit around and ts wont stop you

// instead you do this
const coke: [string, boolean, number] = ["brown", true, 40]
// this is how you know the difference between tuples and arrays
// arrays just use the pipe. 

// you can also do that with a type alias. 
// see alias folder
type Drink = [string, boolean, number]
const fanta: Drink = ["orange", true. 40]

// Where it breaks down
const carSpecs: [number, number] = [400, 3354]
// you can freely move those two numbers around and still break the data structure
// just use an object instead. 

const carStats = {
  horsepower: 400,
  weight: 3254
}
// works way better