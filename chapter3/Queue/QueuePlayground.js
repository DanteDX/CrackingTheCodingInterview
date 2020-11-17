const Queue = require("./Queue");

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q.enqueue(3));
console.log(q.enqueue(4));
console.log(q.checkData());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.isEmpty());