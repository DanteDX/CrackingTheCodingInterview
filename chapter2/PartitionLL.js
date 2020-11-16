const SinglyLinkedList = require("./SLL/SinglyLinkedList");

let SLL = new SinglyLinkedList();
let index = 10;
while(index !== 0){
    SLL.push(index);
    index--;
}

//O(n), time complexity
function PartitionLL(sll,n){
    // all values of each node are numbers
    let LLNodeValues = sll.print();
    let lessEqual = [];
    let greater = [];
    for(let nodeValue of LLNodeValues){
        if(nodeValue <= n){
            lessEqual.push(nodeValue);
        }else if(nodeValue > n){
            greater.push(nodeValue);
        }
    }
    let partitionedArray = [...lessEqual,...greater];
    let partitionedLL = new SinglyLinkedList();
    for(let val of partitionedArray){
        partitionedLL.push(val);
    }
    return partitionedLL;
}

console.log(Partition(SLL,4).print()); // to view the nodeValues simply in an array
console.log(PartitionLL(SLL,4));