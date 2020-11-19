const SinglyLinkedList = require("./SLL/SinglyLinkedList");

let SLL = new SinglyLinkedList();
// let index = 10;
// while(index !== 0){
//     SLL.push(index);
//     index--;
// }
// SLL.push(1);SLL.push(2);SLL.push(1);
SLL.push('a');SLL.push('b');SLL.push('c');SLL.push('b');SLL.push('a');

function LinkedListPalindrome(sll){
    let withoutReversed = sll.print().join(",");
    let reversed = sll.reverse().print().join(",");

    // let reversed = [];
    // for(let i = sll.print().length - 1;i>=0;i--){
    //     reversed.push(sll.print()[i]);
    // }
    // reversed = reversed.join(",");

    console.log(reversed);
    console.log(withoutReversed);

    return reversed === withoutReversed;
}

console.log(LinkedListPalindrome(SLL));