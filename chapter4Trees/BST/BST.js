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
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
        continue;
      } else if (value > current.value) {
        current = current.right;
        continue;
      } else if (value === current.value) {
        found = true;
      }
    }
    return found;
  }


  /* ######################"Tree Traversal begins here"########################
  if the tree is more depth, less width, better to use BFS,
  if the tree is more on width, less depth, better to use DFS */

  // breadth first search bst traversal
  // time coplexity, O(n) as we have to traverse all node
  // space complexity, O(n)
  BFS() {
    if (this.root === null) return undefined;
    let result = [];
    let queue = new Queue();
    queue.enqueue(this.root);
    let current;
    while (queue.length !== 0) {
      current = queue.dequeue();
      result.push(current.value);
      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);
    }
    return result;
  }

  // all dfs algorithms time complexity O(n), as like b4, we have to traverse every node
  // all dfs algirthms space complexity O(h), h is the height of the tree
  //  DFS Preorder can be used for getting the order in which the tree can be created again in the same way
  DFSPreOrderRecursive(){
    if (this.root === null) return undefined;
    let data = [];
    function traverse(node){
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPreOrderIterative(){
    if (this.root === null) return undefined;
    let data = [];
    let s = [this.root];
    let node;
    while(s.length !== 0){
      node = s.pop();
      data.push(node.value);
      if(node.right) s.push(node.right);
      if(node.left) s.push(node.left);
    }
    return data;
  }

  // DFS InOrder can be of great used to get minimum to maximum sorted elements from this tree
  DFSInOrderRecursive(){
    if (this.root === null) return undefined;
    let data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      data.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrderIterative(){
    if (this.root === null) return undefined;
    let data = [];
    let s = [];
    let node = this.root;
    while((s.length !== 0) || (node !== null)){
      if(node !== null){
        s.push(node);
        node = node.left;
      }else{
        node = s.pop();
        data.push(node.value);
        node = node.right;
      }
    }
    return data;
  }

  DFSPostOrderRecursive(){
    if (this.root === null) return undefined;
    let data = [];
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrderIterative(){
    if (this.root === null) return undefined;
    let data = [];
    let s = [];
    let lastNodeVisited = null;
    let node = this.root;
    while((s.length !== 0) || (node !== null)){
      if(node !== null){
        s.push(node);
        node = node.left;
      }else{
        let peekNode = s[s.length  -1];
        if(peekNode.right !== null && lastNodeVisited !== peekNode.right){
          node = peekNode.right;
        }else{
          data.push(peekNode.value);
          lastNodeVisited = s.pop();
        }
      }
    }
    return data;
  }

  
}

module.exports = BST;
