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

// issue is that every time we want to do this, you have to create a collection, instantiate the sorter, then sort. 
// it'd be nice if we could just do numbersCollection.sort()
// so add a sort method to each class would be nice. For this, use inheritance. 
// Make sorter the super class

/** 
 * Now with super sorter - abstract classes
 */

const newNumbersCollection = new NumbersCollection([5,3,4,4])
newNumbersCollection.sort()
console.log(newNumbersCollection.data);

const newCharactersCollection = new CharactersCollection("whatever")
newCharactersCollection.sort()
console.log(newCharactersCollection.data)

const newLinkedList = new LinkedList()
newLinkedList.add(500)
newLinkedList.add(400)
newLinkedList.add(5)
newLinkedList.sort()
newLinkedList.print()
 