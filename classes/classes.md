# Classes

Blueprint to Create an object with some fields (values) and methods (functions) to represent a 'thing'

They basically operate the same as they always have

## Methods

Just looks like es6 really:

```ts
class Vehicle {
  drive(): void {
    console.log('Vrooooom')
  }

  honk(): void {
    console.log('BEEEP')
  }
}

const vehicle = new Vehicle()
vehicle.drive()
vehicle.honk()
```

### Public vs Private vs Protected

| type      | result                                                      |
| --------- | ----------------------------------------------------------- |
| Public    | can be called anywhere any time.                            |
| Private   | can only be called by other methods in _this_ class         |
| Protected | Can be called by other methods in this, or by child classes |

You use Private to stop other developers from calling something that they shouldn't (something that will fuck up the class for example)
It has nothing to do with security really.

## When to use them

Interfaces + Classes = the primary tool to make strong code (and reusability) in TS
