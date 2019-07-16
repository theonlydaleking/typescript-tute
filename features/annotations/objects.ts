// also forgot about object methods here.
const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age
  },
}

// you have to list out the structure if destructuring {age}
const { age }: { age: number } = profile

// nasty destructuring.
// it does this because what happens if you want to destructure more than one?
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile
