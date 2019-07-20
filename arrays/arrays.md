# Arrays 

## They must be always the same type. 

similar to slices in Go. 

you can define them explicitly like so: 

```ts
const carMakers: string[] = ['ford', 'toyota', 'jeep',]
```

You will need to do this if you're going to initialise it later. 

They help you with inference when extracting values. (by direct index or even pop)

```ts
const carMakers = ["jeep", "ford"]
const car = carMakers[0] //car will be of type string
```

## When to use them
if you ever initialise a blank one. Definitely (otherwise you get 'other')
if you ever have a mixed array that you only initialise with a single type. 
(see //flexible types in arrays.ts)
if you don't initialise with a type at all, and only put in one type on initialisation, but you need a mixed type later, you'll have to do this explicitly

Dont use them when tuples work: 
