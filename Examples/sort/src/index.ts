import { WorkingSorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const sorter = new WorkingSorter(numbersCollection)
sorter.sort()
console.log(sorter.collection)

const charactersColection = new CharactersCollection('heyThere')
const stringSorter = new WorkingSorter(charactersColection)

stringSorter.sort()
console.log(stringSorter.collection)
