const Trie = require("./Trie");

let trie = new Trie();
trie.insert('soap');
trie.insert('soar');
trie.insert('pat');
trie.insert('pan');
trie.insert('ra');
trie.insert('rat');
trie.insert('roa');
trie.insert('roar');

console.log(trie.search('soap'));
console.log(trie.search('soar'));
console.log(trie.search('pat'));
console.log(trie.search('pan'));
console.log(trie.search('ra'));
console.log(trie.search('rat'));
console.log(trie.search('roa'));
console.log(trie.search('roar'));
console.log(trie.search('piyal')); //false
console.log(trie.search('soart')); //false
console.log(trie.delete('soap'));
console.log(trie.delete('pat'));
console.log('testing after deleting soap and pat');
console.log(trie.search('soap')); //false
console.log(trie.search('pat')); //false
// again inserting soap and searching soap
console.log(trie.insert('soap'));
console.log(trie.search('soap')); //true