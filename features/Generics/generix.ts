// The goal of generics is to create a class that can take anything.
// In this case, You can create an array of anythiing.
// The one method it has - just retrieves the element.

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b", "c"]);

// Rather than:

class ArrayOfAnyStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// and then also having to do this for numbers

class ArrayOfAnyNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

// <T> just is like an argument, it can be anything like <TypeInThisClass>
