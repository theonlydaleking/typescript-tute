"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        // don't put this in the construtor because it gets figured out later 
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
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
}());
exports.LinkedList = LinkedList;
