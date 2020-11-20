const BST = require("./BST");

let bst = new BST();
bst.insert(17);
bst.insert(13);
bst.insert(20);
bst.insert(10);
bst.insert(14);
bst.insert(18);
bst.insert(23);
bst.insert(9);
bst.insert(11);
bst.insert(16);
bst.insert(25);
// console.log(bst.find(20)); // true
// console.log(bst.find(30)); //false
// console.log(bst.find(17)); //true
// console.log(bst.find(40)); //false
console.log('BFS result');
console.log(bst.BFS());
console.log("################################");
console.log('PreOrderRecursive result');
console.log(bst.DFSPreOrderRecursive());
console.log('PreOrderIterative result');
console.log(bst.DFSPreOrderIterative());
console.log("################################");
console.log('InOrderRecursive result');
console.log(bst.DFSInOrderRecursive());
console.log('InOrderIterative result');
console.log(bst.DFSInOrderIterative());
console.log("################################");
console.log('PostOrderRecursive result');
console.log(bst.DFSPostOrderRecursive());
console.log('PostOrderIterative result');
console.log(bst.DFSPostOrderIterative());
