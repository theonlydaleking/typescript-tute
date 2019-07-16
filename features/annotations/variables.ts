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
  y: 20,
}

// Function
// this just does the parameters and
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

//When to use annotations

// 1) Function that returns 'any' type
const json = '{"x": 10, "y": 20}'
// add a object literal.
const coordinates: { x: number; y: number } = JSON.parse(json)

console.log(coordinates) // will give you `any` type
// typescript doesn't try and guess what's in the string

// 2) Delayed Initialisation.
let words = ['red', 'green', 'blue']
let foundWord: boolean

words.forEach(element => {
  if (element === 'green') foundWord = true
})

// 3) When you can't easily infer the type.
let numbers = [-10, -1, 12]
let numberAboveZero = false

// try and assign the number to numberAboveZero else, assign false.
numbers.forEach(element => {
  if (element > 0) {
    numberAboveZeroA = element
  }
})

// this won't work
// you can do this instead

let numberAboveZeroA: boolean | number = false
