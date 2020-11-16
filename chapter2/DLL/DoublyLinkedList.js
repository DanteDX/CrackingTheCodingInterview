class DoublyLinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //O(1)
  push(val) {
    let newNode = new DoublyLinkedListNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //O(1), for SLL it was O(n) because we had to loop to search for the 2nd from the last element
  // to make it the new tail
  pop() {
    if (!this.head) return null;

    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode;
  }

  //O(1)
  shift() {
    if (this.length === 0) return null;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  //O(1)
  unshift(val) {
    let newHead = new DoublyLinkedListNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // any kind of access is O(n)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count, current;

    if (index <= this.length / 2) {
      count = 0;
      current = current.next;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new DoublyLinkedListNode(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  reverse() {
    //swapping of head and tail
    let temp = this.tail;
    this.tail = this.head;
    this.head = temp;

    let current = this.tail;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = current.prev;
      current.prev = next;
      if (current.prev === this.head) {
        this.head.next = current;
        this.head.prev = null;
        break;
      }
      current = next;
    }
    // return this;
    current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
    return 1;
  }

  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result);
    return result;
  }
  peek() {
    //O(1) now, where it was O(n) for SLL
    let poppedElement = this.pop();
    this.push(poppedElement);
    return poppedElement;
  }
}

module.exports = DoublyLinkedList;
