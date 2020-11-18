/*An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first
out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of
that type). They cannot select which specific animal they would like. Create the data structures to
maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog,
and dequeueCat. You may use the built-in Linked list data structure. */



const Queue = require("./Queue/Queue"); // is a class
// DLL method, remove(index)

class AnimalShelter{
    constructor(){
        this.generalQueue = new Queue();
        this.dogQueue = new Queue();
        this.catQueue = new Queue();
        this.timeStamp = 0;
    }
    enqueueDog(val){
        this.dogQueue.enqueue({type:'dog',value:val,timeStamp:this.timeStamp});
        this.generalQueue.enqueue({type:'dog',value:val,timeStamp:this.timeStamp});
        this.timeStamp++;
    }
    enqueueCat(val){
        this.catQueue.enqueue({type:'cat',value:val,timeStamp:this.timeStamp});
        this.generalQueue.enqueue({type:'cat',value:val,timeStamp:this.timeStamp});
        this.timeStamp++;
    }
    dequeueAny(){
        let poppedAny = this.generalQueue.dequeue();
        if(poppedAny.type === 'dog'){
            this.dogQueue.dequeue();
        }else{
            this.catQueue.dequeue();
        }
        return poppedAny;
    }
    dequeueCat(){
        let poppedCat = this.catQueue.dequeue();
        let removeIndex = poppedCat.timeStamp;
        this.generalQueue.remove(removeIndex);
        return poppedCat;
    }
    dequeueDog(){
        let poppedDog = this.dogQueue.dequeue();
        let removeIndex = poppedDog.timeStamp;
        this.generalQueue.remove(removeIndex);
        return poppedDog;

    }
}

let animalShelter = new AnimalShelter();
animalShelter.enqueueDog('dog1');
animalShelter.enqueueDog('dog2');
animalShelter.enqueueCat('cat1');
animalShelter.enqueueDog('dog3');
animalShelter.enqueueCat('cat2');
console.log(animalShelter.generalQueue.print());
console.log(animalShelter.dogQueue.print());
console.log(animalShelter.catQueue.print());
console.log("**************************************");
console.log(animalShelter.dequeueDog());
console.log("**************************************");
console.log(animalShelter.generalQueue.print());
console.log(animalShelter.dogQueue.print());
console.log(animalShelter.catQueue.print());

