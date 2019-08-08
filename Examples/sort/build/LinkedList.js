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
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        // don't put this in the construtor because it gets figured out later 
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.add = function (data) {
        // make a new node from data
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        // find the first node
        var tail = this.head;
        while (tail.next) {
            // while there is a .next property, just advance the tail property
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        // just itterates over the list and adds to a counter, returns that counter. 
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    // recieve an index, return a value at that index: 
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("index out of bounds");
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error("can't compare an empty list");
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        // can't be fucked swapping the nodes because you have to change the references. So we're gonna cheat and change the value. 
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}(SuperSort_1.Sorter));
exports.LinkedList = LinkedList;
