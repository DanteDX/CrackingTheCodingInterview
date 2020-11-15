const SinglyLinkedList = require("./SinglyLinkedList");

let SLL = new SinglyLinkedList();
SLL.push(1);
SLL.push(2);
SLL.push(3);
SLL.push(4);
SLL.push(11);

SLL.print();
console.log(SLL);
console.log(SLL.reverse());