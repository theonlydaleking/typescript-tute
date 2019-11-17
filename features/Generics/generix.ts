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

// Also Type inference works here too:

const arr = new ArrayOfAnything(["a", "b", "c"]);
// Now mouse over arr and it'll say type <string>

// You can do this rather than:

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

// Example of Generix with Functions:

const printStrings = (arr: string[]): void => {
  arr.forEach(element => {
    console.log(element);
  });
};

const printNumbers = (arr: number[]): void => {
  arr.forEach(element => {
    console.log(element);
  });
};

// Instead of doing that you can:

const printAnything = <T>(arr: T[]): void => {
  arr.forEach(element => {
    console.log(element);
  });
};

// However it is recomended you annotate it yourself.
// This will stop other devs from accidentally passing in numbers
printAnything<string>(["a", "b"]);

// Example Generic Constraints

class Car {
  print() {
    console.log("i am a car");
  }
}

class House {
  print() {
    console.log("i am a House");
  }
}

interface Printable {
  print(): void;
}

// extends Printable makes sure that whatever you put in, has a print method attached
const printHousesOrCars = <T extends Printable>(arr: T[]): void => {
  arr.forEach(i => {
    i.print();
  });
};
printHousesOrCars([1, 2, 3]); // doesnt work

printHousesOrCars([new House(), new Car()]); // works
