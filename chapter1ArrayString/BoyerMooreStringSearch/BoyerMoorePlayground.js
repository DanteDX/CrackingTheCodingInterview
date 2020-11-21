const BoyerMoore = require("./BoyerMooreStringSearch");

// BoyerMoore(str:string, pattern:string):number

console.log(BoyerMoore('stringstring','string')); // 0
console.log(BoyerMoore('stream','am')); //4
console.log(BoyerMoore('stream','xyz')); //-1, not found