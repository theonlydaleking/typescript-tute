interface Sortable {
  length: number
  compare(leftIndex: number, rightIndex: number): boolean
  swap(leftIndex: number, rightIndex: number): void
}

export class WorkingSorter {
  // This however is still bad. Because you need to keep adding shit
  // every time you want a new type.
  // Just like in the maps project where we used an interface.

  /*TODO: Fix */
  constructor(public collection: Sortable) {}

  sort(): void {
    const { length } = this.collection

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }
  }
}
