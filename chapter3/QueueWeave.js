const Queue = require("./Queue/Queue");

// takes in two queues and weaves them into a single queue

function QueueWeave(q1,q2){
    const q = new Queue();
    while(q1.qPeek() || q2.qPeek()){
        if(q1.qPeek()){
            q.enqueue(q1.dequeue());
        }
        if(q2.qPeek()){
            q.enqueue(q2.dequeue());
        }
    }
    return q;
}

module.exports = QueueWeave;