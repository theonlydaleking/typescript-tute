export class NumbersCollection {
  constructor(public data: number[]) {}

  // You can just call it like an object. ie, collection.length
  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // return a bool on if they need to be swapped

    this.data[leftIndex]

    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex] // the lefthand data
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }
}

const collection = new NumbersCollection([1, 2, 3])
