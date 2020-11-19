/* stack should have O(1) for insertion and removal,
so we can use array implementation for this,
as array's push(value) and pop() is O(1) and we can access any element for O(1) */

class Stack{
    constructor(){
        this.data = [];
        this.length = 0;
    }
    push(val){
        this.data.push(val);
        this.length++;
        return true;
    }
    pop(){
        if(this.data.length === 0) return undefined;
        this.length--;
        return this.data.pop();
    }
    sPeek(){
        return this.data[this.length - 1];
    }
    isEmpty(){
        if(this.data.length === 0){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = Stack;