"use strict";
var Sorter = /** @class */ (function () {
    // Takes a collection of data
    // Sorts all the stuff inside of it.
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () { };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
