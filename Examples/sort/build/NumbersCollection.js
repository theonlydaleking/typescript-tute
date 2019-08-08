"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SuperSort_1 = require("./SuperSort");
var NumbersCollection = /** @class */ (function (_super) {
    __extends(NumbersCollection, _super);
    function NumbersCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
        // this will just put the sort() method here. Imagine it in this file.
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        // super basically does this: 
        // sort(): void {
        //   const { length } = this
        //   for (let i = 0; i < length; i++) {
        //     for (let j = 0; j < length - i - 1; j++) {
        //       if (this.compare(j, j + 1)) {
        //         this.swap(j, j + 1)
        //       }
        //     }
        //   }
        // You can just call it like an object. ie, collection.length
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        // return a bool on if they need to be swapped
        this.data[leftIndex];
        return this.data[leftIndex] > this.data[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.data[leftIndex]; // the lefthand data
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    };
    return NumbersCollection;
}(SuperSort_1.Sorter));
exports.NumbersCollection = NumbersCollection;
