/* in Queue, value will be added as unshift(value) of array, with O(1)
and removed as pop() of array with O(1);
the problem with array is that, array's unshift(val) is O(n)
the problem with SLL is that, its pop() is O(n)
If we implement queue by doublylinkedlist, we will have these complexities easily,
DLL's unshift(value) and pop() both has O(1)
we call unshift(value) here enqueue(value) and pop() will be named dequeue() */

const DoublyLinkedList = require("../../chapter2/DLL/DoublyLinkedList");
// checkout the DoublyLinkedList class to properly understand the methods
class Queue extends DoublyLinkedList{
    constructor(){
        super();
    }
    enqueue(val){
        this.push(val);
        return true;
    }
    dequeue(){
        if(this.length === 0) return undefined;
        return this.pop().val;
    }
    isEmpty(){
        if(this.length === 0){
            return true;
        }else{
            return false;
        }
    }
    // just for easy work
    checkData(){
        return this.print();
    }
}

module.exports = Queue;
