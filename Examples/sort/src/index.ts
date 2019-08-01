import { WorkingSorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const sorter = new WorkingSorter(numbersCollection)
sorter.sort()
console.log(sorter.collection)
