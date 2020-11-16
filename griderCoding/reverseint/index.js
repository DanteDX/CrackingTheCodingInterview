// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     if(n === 0) return 0;
//     if(n < 0) return (Number((n * -1).toString().split("").reduce((x,y) => y + x)) * (-1))
//     return Number(n.toString().split("").reduce((x,y) => y + x));
// }

function reverseInt(n){
     return parseInt(n.toString().split("").reduce((x,y) => y+x)) * Math.sign(n);
}

module.exports = reverseInt;
