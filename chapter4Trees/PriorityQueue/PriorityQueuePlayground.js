const PriorityQueueMax = require("./PriorityQueueMax");
const PriorityQueueMin = require("./PriorityQueueMin");

let pqmax = new PriorityQueueMax();
pqmax.enqueue("one",1);
pqmax.enqueue("ten",10);
pqmax.enqueue("eleven",11);
pqmax.enqueue("two",2);
pqmax.enqueue('three',3);
pqmax.enqueue('hundred',90);
console.log('pqmax values are: ',pqmax.values);
console.log(pqmax.dequeueMax());
console.log(pqmax.dequeueMax());
console.log('pqmax values after dequeueing', pqmax.values);

console.log("#####################################################################");

let pqmin = new PriorityQueueMin();
pqmin.enqueue("one",1);
pqmin.enqueue("ten",10);
pqmin.enqueue("eleven",11);
pqmin.enqueue("two",2);
pqmin.enqueue('three',3);
pqmin.enqueue('hundred',90);
pqmin.enqueue('hundred',100);
console.log('pqmin values are: ',pqmin.values);
console.log(pqmin.dequeueMin());
console.log(pqmin.dequeueMin());
console.log('pqmin values after dequeueing', pqmin.values);