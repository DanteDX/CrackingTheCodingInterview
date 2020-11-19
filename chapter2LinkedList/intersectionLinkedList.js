/* a -> b -> c -> d -> e -> f -> g
a1 -> b1 -> c1 -> d
find the node where the two linked list intersects, here find 'd' */

/* I am going to use doublyLinkedList as it has a peek function of O(1) whereas SinglyLinkedList 
has a peek function of O(n) */

const DoublyLinkedList = require("./DLL/DoublyLinkedList");
let DLL1 = new DoublyLinkedList();
DLL1.push(1);DLL1.push(2);DLL1.push(3);DLL1.push(4);DLL1.push(10);
let DLL2 = new DoublyLinkedList();
DLL2.push(99);DLL2.push(98);DLL2.push(3);DLL2.push(4);DLL2.push(10);

function intersectionLinkedList(dll1,dll2){
    // we put each node in each stack
    let dll1Nodes = dll1.print();
    let dll2Nodes = dll2.print();
    console.log('First Linked list was',dll1Nodes);
    console.log('Second Linked List was', dll2Nodes);

    // we look for edge cases, stack size zero or not
    if(dll1Nodes.length === 0 || dll2Nodes.length === 0) return undefined; 

    //if the last element of each stack doesn't match, meaning they didn't intersect at all
    if(dll1.peek().val !== dll2.peek().val) return false;
    // we pop each stack until we find a mismatched element at the end of each stack
    let intersectElement;
    while(dll1.peek().val === dll2.peek().val){
        intersectElement = dll1.peek().val;
        dll1.pop();
        dll2.pop();
    }
    return intersectElement;
}



console.log(intersectionLinkedList(DLL1,DLL2));