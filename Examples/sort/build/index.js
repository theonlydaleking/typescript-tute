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
