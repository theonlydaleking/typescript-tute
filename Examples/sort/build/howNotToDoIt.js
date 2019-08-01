"use strict";
var Sorter = /** @class */ (function () {
    // Takes a collection of data
    // Sorts all the stuff inside of it.
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // don't worry about the algorithm, it's not important.
                // but this is bubble sort
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                    // Yuck
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
// Now to get it work with strings
// you cant do
// const str = "hey there"
// str[0] = Y
// Strings are immutable so if you try log it:
// console.log(str); // "hey there"
// Basically swapping this way doesnt work, neither does comparison
// you could try it with a collection: number[] | string
// this wouldn't work because remember typescript only allows methods that are allowed on both. (not either)
// so you wouldn't then be able to add numbers
// It will however realise that you can read from an index. (strings have index access to a string to read)
var BadWorkingSorter = /** @class */ (function () {
    // This however is still bad. Because you need to keep adding shit
    // every time you want a new type.
    // Just like in the maps project where we used an interface.
    function BadWorkingSorter(collection) {
        this.collection = collection;
    }
    BadWorkingSorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // typeguard for array
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                        // Yuck
                    }
                }
                if (typeof this.collection === 'string') {
                }
            }
        }
    };
    return BadWorkingSorter;
}());
// needs to be able to be compared
// needs to be able to be swapped
// needs to be able to change its approach based on type
// We do this by extracting the custom logic.
// Then making the Sorter very generic
