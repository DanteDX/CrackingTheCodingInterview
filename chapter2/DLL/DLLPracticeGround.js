const DoublyLinkedList = require("./DoublyLinkedList");

let DLL = new DoublyLinkedList();
DLL.push(1);
DLL.push(2);
DLL.push(3);
DLL.push(4);
DLL.push(10);
DLL.print();
console.log(DLL.reverse());