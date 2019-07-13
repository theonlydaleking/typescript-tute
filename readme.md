# Typescript

The typescript system: 

- helps us catch errors _during_ development (in javascript, the only way to find bugs is to run the code.)
- uses type annotations
- the type system is only active during development. It compiles into javascript
- TS compiler does no performance optimisation at all.

Everything runs through the TS compiler, spits out JS. We then run it. 

## Typescript Playground

[Go here](http://www.typescriptlang.org/play/index.html) to have a go with a TS playground

## Objective

Basically all we do is just add syntax to our code. It eventually ends up as javascript. 

Think of typescript as a dude sitting behind you watching you to watch you and stop you from making errors. 

## Setup

`npm install -g typescript ts-node`

once this is done you can use `tsc` which stands for "type script compiler" 

## ts-node 
to run a file you need to compile it first. 

```bash
tsc index.ts
node index.js
```

but you can join these with ts-node. 

`ts-node index.ts`

## Catching errors

The first example is if you write out code like this: 

```js
  const ID = todo.ID;
  const title = todo.title;
  const finished = todo.finished;
```

when the json data is actually: 

```js
{ 
  userId: 1, 
  id: 1, 
  title: 'delectus aut autem', 
  completed: false 
}
```

these simple typos are what is fixed by TS 

## Interfaces 
these say "There will be some type of data type in the program that will contain the following data. 

```js
interface Todo {
  id: number
  title: string
  completed: boolean
}
```

then you call it with 

```js
const todo = response.data as Todo
```

if you do that, then the code in the [[Catching erros]] section will throw 3 errors. 