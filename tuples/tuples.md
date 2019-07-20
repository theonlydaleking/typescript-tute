# Tuples

Tuples are like an array, they have elements that each represent something about a specific thing. 

ie 'drink' would be 

| property   | value |
| ---------- | ----- |
| colour     | brown |
| carbonated | true  |
| sugar      | 40    |

If we represent this as an array, you just get 
["brown", "true", 40]
but you don't have the title 

## Tuples aren't really useful tho 
You really only use it for a CSV file. 
for example if you get: 

```ts
const carSpecs: [number, number] = [400, 3354]
```

you can freely move those two numbers around and still break the data structure

You would just use an object.