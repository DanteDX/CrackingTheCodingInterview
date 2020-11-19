const SinglyLinkedList = require("./SLL/SinglyLinkedList");

function SumList(sll1,sll2){
    let num1 = Number(sll1.reverse().print().join(""));
    let num2 = Number(sll2.reverse().print().join(""));
    let sum = num1 + num2;

    let SumLinkedList = new SinglyLinkedList();
    sum.toString().split("").reverse().forEach(digit => SumLinkedList.push(Number(digit)));
    
    // according to the question you should "return SumLinkedList"
    return SumLinkedList.print();
}

let number1 = new SinglyLinkedList();
number1.push(7);
number1.push(1);
number1.push(6);

let number2 = new SinglyLinkedList();
number2.push(5);
number2.push(9);
number2.push(2);

console.log(SumList(number1,number2));

