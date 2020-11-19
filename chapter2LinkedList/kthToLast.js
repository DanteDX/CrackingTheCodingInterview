const SinglyLinkedList = require("./SLL/SinglyLinkedList");

let SLL = new SinglyLinkedList();
let index = 10;
while(index !== 0){
    SLL.push(index);
    index--;
}

function kthToLast(sll,n){
    let slow = sll.head;
    let fast = sll.head;
    for(let i = 0;i<n;i++){
        fast = fast.next;
    }
    //fast and slow are 'n' apart initially now
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

console.log(kthToLast(SLL,7));