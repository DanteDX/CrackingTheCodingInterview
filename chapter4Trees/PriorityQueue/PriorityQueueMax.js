/* enqueue O(log n)
   dequeue O(log n)
   search O(n)
*/


class PriorityQueueMax{
    constructor(){
        this.values = [];
    }
    bubbleUp(){
        let elementIndex = this.values.length - 1;
        let element = this.values[elementIndex];
        while(elementIndex > 0){
            let parentIndex = Math.floor((elementIndex - 1)/2);
            let parentElement = this.values[parentIndex];
            
            if(parentElement.priority >= element.priority) break;

            this.values[parentIndex] = element;
            this.values[elementIndex] = parentElement;
            elementIndex = parentIndex;

        }
    }
    enqueue(val,priority){
        if(priority === undefined || val === undefined) return false;
        this.values = this.values.filter(obj => obj.val !== val);
        this.values.push({val,priority});
        this.bubbleUp();
        return true;
    }
    checkPriority(val){
        for(let obj of this.values){
            if(obj.val === val){
                return obj.priority;
            }
        }
        return undefined;
    }

    /* we first extract the max from maxheap
    and then fill the empty node with last added element,
    which will be already down in extract max
    function */
    sinkDown(){
        let index = 0
        let length = this.values.length;
        let element = this.values[0];

        while(true){
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length ){
                leftChild = this.values[leftChildIndex];
                if(leftChild.priority > element.priority){
                    swap = leftChildIndex;
                }
            }

            if(rightChildIndex < length ){
                rightChild = this.values[rightChildIndex];
                if(
                    ((swap !== null) && (rightChild.priority > leftChild.priority)) ||
                    ((swap === null) && rightChild.priority > element.priority)
                ){
                    swap = rightChildIndex;
                }
            }

            if(swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }

    dequeueMax(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
}



module.exports = PriorityQueueMax;