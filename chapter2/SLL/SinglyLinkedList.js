/* Singly linked lists are excellent choice instead of arrays,
when you are trying to insert or remove something from the beginning, 
because for array shift(), unshift() is O(n), because everything have
to be reindexed, for Singly Linked lists, shift(), unshift()
are O(1), but in case of push/pop array will be better because
in both cases of array it is O(1), for Singly Linked Lists,
it becomes O(n),pop and O(1) for push,

array has the advantage when we are trying to access element, O(1), 
in case of array random access is possible,

whereas,

is case SLL, random access is not posisible, so any kind of information acess will
be O(n)

*/

class SinglyLinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //push something to the end of the linked list
  // push easily to the tail, O(1)
  push(val) {
    let newNode = new SinglyLinkedListNode(val);
    /* edge cases are if there is no head yet */
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; // returns the SinglyLinkedList class
  }

  //remove and return something from the end of the linked list
  // O(n) because first you need to find the tail and then pop it
  pop() {
    /* edge cases are, if there is no head,
        if there is only one element, which is the head & tail both itself */

    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //shift(), remove and return something from beginning of the linked list, O(1)
  shift() {
    /* edge cases are, if there is only 1 element, 
        which is head & tail, if there are no elements */
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  // unshift(val) inserts val to the beginning of the linked list, O(1)
  /* edge cases are if there is no head */
  unshift(val) {
    let newNode = new SinglyLinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // returns the whole node at that index, O(n)
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  // sets the indexed node's value to val, O(n)
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  /* inserts a certain node at the indexed poin, O(n), if not push/unshift */
  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) return !!this.push(val); // O(1)
    if (index === 0) return !!this.unshift(val); // O(1)

    let newNode = new SinglyLinkedListNode(val);
    let forwardNode = this.get(index);
    let prevNode = this.get(index - 1);
    prevNode.next = newNode;
    newNode.next = forwardNode;
    this.length++;
    return true;
  }

  //removes the node from the indexed position, O(n)
  remove(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return !!this.shift(); // O(1)
    if (index === this.length) return !!this.pop(); // O(n)

    let previousNode = this.get(index - 1);
    let removed = this.get(index);
    previousNode.next = removed.next;
    this.length--;

    return removed;
  }

  reverse() {
    if (!this.head) return null;
    if (this.length === 1) return this;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    // three pointers, node,prev,next
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;

      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push(current.val);
      current = current.next;
    }

    // while(current.next){
    //     arr.push(current.val);
    //     current = current.next;
    // }
    // the while loop misses the last element
    return arr;
  }

  peek(){
    //O(n) still, should be better at DLL
    let poppedElement = this.pop();
    this.push(poppedElement.val);
    return poppedElement;
  }
}

module.exports = SinglyLinkedList;
