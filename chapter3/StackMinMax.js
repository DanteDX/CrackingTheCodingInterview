// implement a stack which has a getMin(), getMax() method which has time complexity O(1)
// getMin() returns the minimum value in the stack
// getMax() returns the maximum value from the stack

class StackMinMax{
    constructor(){
        this.data = [];
        this.minData = [];
        this.maxData = [];
    }
    push(val){
        this.data.push(val);
        if(this.minData.length === 0){
            this.minData.push(val);
        }
        if(this.maxData.length === 0){
            this.maxData.push(val);
            return;
        }
        // check the minData to push
        let tempMin = this.minData[this.minData.length - 1];
        if(val < tempMin){
            this.minData.push(val);
            return;
        }
        //chech the maxData to push
        let tempMax = this.maxData[this.maxData.length - 1];
        if(val > tempMax){
            this.maxData.push(val);
            return;
        }
    }
    pop(){
        let poppedElement = this.data.pop();
        if(poppedElement === this.minData[this.minData.length - 1]) this.minData.pop();
        if(poppedElement === this.maxData[this.maxData.length - 1]) this.maxData.pop();
        return poppedElement;
    }
    getMin(){
        return this.minData[this.minData.length - 1];
    }
    getMax(){
        return this.maxData[this.maxData.length - 1];
    }
}

let smm = new StackMinMax();
smm.push(10);
smm.push(9);
smm.push(11);
smm.push(13);
smm.push(7);
smm.push(4);
smm.push(19);
//[10,9,11,13,7]
console.log(smm.data);
console.log(smm.minData);
console.log(smm.maxData);

smm.pop();
console.log('Afer popping is done');
console.log(smm.data);
console.log(smm.minData);
console.log(smm.maxData);


