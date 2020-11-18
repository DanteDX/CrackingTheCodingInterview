// describe how you can use a single array to implement three stacks or 'k' stacks in general

class NStack {
  constructor() {
    this.arr = [];
    this.topIndexes = [];
    this.nextIndexes = [];
    this.prevIndexes = [];
    this.availableIndex = 0;
  }

  push(stackId, val) {
    this.arr[this.availableIndex] = val;
    if (typeof this.nextIndexes[this.availableIndex] === "undefined") {
      this.nextIndexes[this.availableIndex] = this.availableIndex + 1;
    }

    if (typeof this.topIndexes[stackId] === "undefined") {
      this.topIndexes[stackId] = -1;
    }

    this.prevIndexes[this.availableIndex] = this.topIndexes[stackId];
    this.topIndexes[stackId] = this.availableIndex;
    this.availableIndex = this.nextIndexes[this.availableIndex];
  }

  pop(stackId) {
    const index = this.topIndexes[stackId];

    if (index === -1) {
      return null;
    }

    const val = this.arr[index];
    const prevIndex =
      typeof this.prevIndexes[index] === "undefined"
        ? -1
        : this.prevIndexes[index];
    this.topIndexes[stackId] = prevIndex;
    if (typeof prevIndex === "undefined") {
      this.prevIndexes[index] = this.prevIndexes[prevIndex];
    } else {
      this.prevIndexes[index] = -1;
    }

    this.nextIndexes[index] = this.availableIndex;
    this.availableIndex = index;

    return val;
  }
}

let nStack = new NStack();
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    nStack.push(i, j);
  }
}

for (let i = 0; i < 4; i++) {
    console.log(nStack.pop(i));
}

//3
//3
//3
//3




// test
//   const s = new NStack();
//   const stacks = [];
//   for(let i=0; i<10; i++) {
//     stacks[i] = [];

//     for(let j=0; j<25; j++) {
//       const val = Math.floor(100*Math.random());
//       stacks[i].push(val);
//       s.push(i, val);
//     }
//   }

//   for(let i=0; i<stacks.length; i++) {
//     while(stacks[i].length) {
//       if(stacks[i].pop() !== s.pop(i)) {
//         console.log('doesn\'t match');
//       } else {
//         process.stdout.write('+');
//       }
//     }
//   }
