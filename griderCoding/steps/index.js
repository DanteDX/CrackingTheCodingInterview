// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//my solution, time complexity O(n), space complexity O(n2)
function steps(n){
    for(let i=1;i<=n;i++){
        let result = new Array(i).fill("#").join("") + new Array(n-i).fill(" ").join("");
        console.log(result); 
    }
}

//solution #1, time complexity O(n2), space complexity O(1)
// function steps(n){
//     for(let row=0;row<n;row++){
//         let result = "";
//         for(let col=0;col<n;col++){
//             if(col <= row){
//                 result += "#"
//             }else{
//                 result += " "
//             }
//         }
//         console.log(result);
//     }
// }

//recursive solution
// function recursionPractice(n){
//     if(n < 0) return;
//     console.log(n);
//     n--;
//     recursionPractice(n);
// }
// recursionPractice(10);












module.exports = steps;
