// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./Stack/Stack');

class MyQueue {
    constructor(){
        this.s1 = new Stack();
        this.s2 = new Stack();
    }
    add(record){ //enqueue
        this.s1.data.push(record);
    }
    remove(){ //dequeue
        while(this.s1.data.length !== 0){
            this.s2.data.push(this.s1.data.pop());
        }
        let result = this.s2.data.pop();
        while(this.s2.data.length !== 0){
            this.s1.data.push(this.s2.data.pop());
        }
        return result;
    }
    peek(){ // peek which element to be removed
        while(this.s1.data.length !== 0){
            this.s2.data.push(this.s1.data.pop());
        }
        let result = this.s2.data[this.s2.data.length - 1];
        while(this.s2.data.length !== 0){
            this.s1.data.push(this.s2.data.pop());
        }
        return result;
    }
}

module.exports = MyQueue;
