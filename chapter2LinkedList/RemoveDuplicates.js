const SinglyLinkedList = require("./SLL/SinglyLinkedList");

let SLL = new SinglyLinkedList();
SLL.push(1);SLL.push(2);SLL.push(1);SLL.push(3);SLL.push(1);SLL.push(2);SLL.push(4);


//O(n)
function removeDulicates(sll){
    let withDuplicates = sll.print(); 
    let uniqueMap = {};
    for(let eachNodeVal of withDuplicates){
        uniqueMap[eachNodeVal] = uniqueMap[eachNodeVal] + 1 || 1;
    } 
    
    let uniqueArray = Object.keys(uniqueMap); 
    let SLLUnique = new SinglyLinkedList();
    for(let uniqueValue of uniqueArray){
        SLLUnique.push(uniqueValue);
    } 
    return SLLUnique;
}

console.log(removeDulicates(SLL).print()); // to see the unique contents
console.log(removeDulicates(SLL));
