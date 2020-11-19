const BST = require("./BST");

let bst = new BST();
bst.insert(17);
bst.insert(13);
bst.insert(20);
bst.insert(10);
bst.insert(14);
bst.insert(18);
bst.insert(23);
console.log(bst.find(20)); // true
console.log(bst.find(30)); //false
console.log(bst.find(17)); //true
console.log(bst.find(40)); //false
console.log(bst.BFS());