"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this has become a parent class.
// we just want it to be copy pasted into child classes. 
// we will never instantiate it manually. 
// This is why it needs to be an Abstract Classes. 
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
