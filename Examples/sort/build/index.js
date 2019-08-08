"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new Sorter_1.WorkingSorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
var charactersColection = new CharactersCollection_1.CharactersCollection('heyThere');
var stringSorter = new Sorter_1.WorkingSorter(charactersColection);
stringSorter.sort();
console.log(stringSorter.collection);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(100);
linkedList.add(500);
linkedList.add(-3);
linkedList.add(4);
var linkedsorter = new Sorter_1.WorkingSorter(linkedList);
linkedsorter.sort();
linkedList.print();
// issue is that every time we want to do this, you have to create a collection, instantiate the sorter, then sort. 
// it'd be nice if we could just do numbersCollection.sort()
// so add a sort method to each class would be nice. For this, use inheritance. 
// Make sorter the super class
/**
 * Now with super sorter - abstract classes
 */
var newNumbersCollection = new NumbersCollection_1.NumbersCollection([5, 3, 4, 4]);
newNumbersCollection.sort();
console.log(newNumbersCollection.data);
