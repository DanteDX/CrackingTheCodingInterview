const MaxBinaryHeap = require("./MaxBinaryHeap");
const MinBinaryHeap = require("./MinBinaryHeap");


let maxHeap = new MaxBinaryHeap();
maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(0);
maxHeap.insert(11);
console.log(maxHeap.values); // [11,3,2,0,1]
console.log("Max value is ",maxHeap.extractMax()); //1
console.log(maxHeap.values); //[3,1,2,0]

console.log("############################################################");

let minHeap = new MinBinaryHeap();
minHeap.insert(1);
minHeap.insert(2);
minHeap.insert(3);
minHeap.insert(0);
minHeap.insert(11);
console.log(minHeap.values); 
console.log("Min value is ",minHeap.extractMin()); 
console.log(minHeap.values); 