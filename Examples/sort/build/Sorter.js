"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkingSorter = /** @class */ (function () {
    // This however is still bad. Because you need to keep adding shit
    // every time you want a new type.
    // Just like in the maps project where we used an interface.
    /*TODO: Fix */
    function WorkingSorter(collection) {
        this.collection = collection;
    }
    WorkingSorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return WorkingSorter;
}());
exports.WorkingSorter = WorkingSorter;
