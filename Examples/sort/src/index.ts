import { WorkingSorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import {LinkedList} from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
const sorter = new WorkingSorter(numbersCollection)
sorter.sort()
console.log(sorter.collection)

const charactersColection = new CharactersCollection('heyThere')
const stringSorter = new WorkingSorter(charactersColection)

stringSorter.sort()
console.log(stringSorter.collection)


const linkedList = new LinkedList() 

linkedList.add(100)
linkedList.add(500)
linkedList.add(-3)
linkedList.add(4)

const linkedsorter = new WorkingSorter(linkedList)
linkedsorter.sort()
linkedList.print()

