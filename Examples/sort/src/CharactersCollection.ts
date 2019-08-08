import {Sorter} from './SuperSort'

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // lowercase everything first
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    )
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('')
    let leftHand = characters[leftIndex]

    characters[leftIndex] = characters[rightIndex]
    characters[rightIndex] = leftHand

    this.data = characters.join('')
  }
}
