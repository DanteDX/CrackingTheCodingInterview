const SinglyLinkedList = require("./SLL/SinglyLinkedList");
let SLL = new SinglyLinkedList();
let index = 11;
while(index !== 0){
    SLL.push(index);
    index--;
}

function midPoint(sll){
    let slow = sll.head;
    let fast = sll.head;
    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

console.log(midPoint(SLL));