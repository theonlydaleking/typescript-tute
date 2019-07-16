// In depth on how to use typescript with functions

// how it looks in js
const addNormal = (a, b) => {
  return a + b
}

// how it looks in ts
const add = (a: number, b: number): number => {
  return a + b
}

// if you don't return anything use : void
const logger = (message: string): void => {
  console.log(message)
}

// in case the function will never complete.
// pretty rare.
const throwError = (message: string): never => {
  throw new Error(message)
}

const forecast = {
  date: new Date(),
  weather: 'sunny',
}

// destructuring
const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}
// ===
const logWeatherDestructured = ({
  date,
  weather,
}: {
  date: Date
  weather: string
}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(forecast)
