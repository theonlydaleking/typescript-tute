import {Sorter} from './SuperSort'


class Node {
  // don't put this in the construtor because it gets figured out later 
  next: Node | null = null
  constructor(public data: number){}


}


export class LinkedList extends Sorter {
  head: Node | null = null 

  add(data: number): void {
    // make a new node from data
    const node = new Node(data)

    if (!this.head) {
      this.head = node
      return
    }

    // find the first node
    let tail = this.head
    while (tail.next) {
      // while there is a .next property, just advance the tail property
      tail = tail.next
    }

    tail.next = node
  }


  // just itterates over the list and adds to a counter, returns that counter. 
  get length(): number {
    if (!this.head) {
      return 0
    }

    let length = 1 
    let node = this.head 

    while(node.next) {
      length++ 
      node = node.next
    }

    return length
  }


  // recieve an index, return a value at that index: 
  at(index: number): Node {
    if (!this.head) {
      throw new Error('index out of bounds')
    }

    let counter = 0 
    let node: Node | null = this.head
    while (node) {
      if (counter === index) {
        return node
      }
      counter++ 
      node = node.next
    }

    throw new Error("index out of bounds")
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if(!this.head) {
      throw new Error("can't compare an empty list")
    }

    return this.at(leftIndex).data > this.at(rightIndex).data
  }

  swap(leftIndex: number, rightIndex: number): void {
    // can't be fucked swapping the nodes because you have to change the references. So we're gonna cheat and change the value. 
    const leftNode = this.at(leftIndex)
    const rightNode = this.at(rightIndex)

    const leftHand = leftNode.data
    leftNode.data = rightNode.data
    rightNode.data = leftHand
  }

  print(): void {
    if (!this.head) {
      return 
    }

    let node: Node | null = this.head 
    while (node ) {
      console.log(node.data)
      node = node.next
    }
  }
  

}