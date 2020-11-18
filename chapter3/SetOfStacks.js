/* Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
threshold. Implement a data structure SetOfStacks that mimics this. SetO-fStacks should be
composed of several stacks and should create a new stack once the previous one exceeds capacity.
SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack
(that is, pop () should return the same values as it would if there were just a single stack) */

const Stack = require("./Stack/Stack");

class SetOfStacks {
  constructor(limit) {
    this.limit = limit;
    this.data = [];
    this.stackSet = [];
    let s = new Stack();
    this.stackSet.push(s);
  }
  push(val) {
    this.data.push(val);
    let currentStack = this.stackSet.pop();
    currentStack.push(val);
    this.stackSet.push(currentStack);
    if (currentStack.length === this.limit) {
      let s = new Stack();
      this.stackSet.push(s);
    }
  }
  pop() {
    if (this.stackSet.length === 1 && this.stackSet[0].length === 0) {
      return undefined;
    }
    let lastStack = this.stackSet.pop();
    if (lastStack.length === 0) {
      lastStack = this.stackSet.pop();
    }
    let poppedElement = lastStack.pop();
    this.stackSet.push(lastStack);
    this.data.pop();
    return poppedElement;
  }
  // popping at specific stack
  popAt(stackIndex) {
    if(this.stackSet[stackIndex] === "undefined"){
        return undefined;
    }
    if(stackIndex === this.stackSet.length - 1){
        if(this.stackSet[stackIndex].data.length === 0){
            return undefined;
        }else{
            let poppedElementLast = this.stackSet[stackIndex].data.pop();
            return poppedElementLast;
        }
    }

    let poppedElement = this.stackSet[stackIndex].data.pop();
    for(let i = stackIndex + 1;i<this.stackSet.length;i++){
        if(i === this.stackSet.length - 1){
            if(this.stackSet[i].data.length === 0){
                this.stackSet[i-1].length--;
                this.stackSet.pop();
                break;
            }else{
                let shiftedElement = this.stackSet[i].data.shift();
                this.stackSet[i].length--;
                this.stackSet[i-1].data.push(shiftedElement);
                break;
            }
        }
        let shiftedElement = this.stackSet[i].data.shift();
        this.stackSet[i-1].data.push(shiftedElement);
    }
    return poppedElement;
  }
  
  // cannot push at specific stack, because other stacks don't initialize without reaching limit
}

let ss = new SetOfStacks(2);
console.log(ss.stackSet);
console.log(ss.pop());
ss.push(1);
ss.push(2);
ss.push(3);
ss.push(4);
ss.push(7);
ss.push(8);
ss.push(9);
ss.push(10);
ss.push(11);
console.log(ss.stackSet);
// console.log(ss.data);
// console.log(ss.pop());
// console.log(ss.pop());
// console.log(ss.pop());
// console.log(ss.stackSet);
console.log("popping from 1");
console.log(ss.popAt(1));
console.log(ss.stackSet);
console.log("popping from 2");
console.log(ss.popAt(2));
console.log(ss.stackSet);
