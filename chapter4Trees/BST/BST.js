const Queue = require("../../chapter3StackQueue/Queue/Queue");


class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new BSTNode(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        // we are not gonna have duplicates
        if (current.value === value) return undefined; // could be better here
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  // insert ends here
  find(value){
      if(this.root === null) return false;
      let current = this.root;
      let found = false;
      while(current && !found){
          if(value < current.value){
            current = current.left;
            continue;
          }else if(value > current.value){
            current = current.right;
            continue;
          }else if(value === current.value){
              found = true;
          }
      }
      return found;
  }

  // breadth first search bst traversal
  BFS(){
    if(this.root === null) return undefined;
    let result = [];
    let queue = new Queue();
    queue.enqueue(this.root);
    let current;
    while(queue.length !== 0){
        current = queue.dequeue();
        result.push(current.value);
        if(current.left) queue.enqueue(current.left);
        if(current.right) queue.enqueue(current.right);
    }
    return result;
  }

}

module.exports = BST;
