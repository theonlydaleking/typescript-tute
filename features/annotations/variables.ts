let apples: number = 5

let speed: string = 'fast'
let hasName: boolean = true

// its interesting here because type is the same as the value
let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array
let colours: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1, 5, 6]
let truth: boolean[] = [true, true, false]

// Classes
class Car {}
let car: Car = new Car()

// Object literal - just use interfaces for this i think.
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}
