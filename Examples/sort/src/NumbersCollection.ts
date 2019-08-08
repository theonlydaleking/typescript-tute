import { Sorter} from './SuperSort'

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super()
    // this will just put the sort() method here. Imagine it in this file.
  }

  // super basically does this: 
  // sort(): void {
  //   const { length } = this
  //   for (let i = 0; i < length; i++) {
  //     for (let j = 0; j < length - i - 1; j++) {
  //       if (this.compare(j, j + 1)) {
  //         this.swap(j, j + 1)
  //       }
  //     }
  //   }

  
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


