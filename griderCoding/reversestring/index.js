// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//solution #1
// const reverse = str => str.split("").reverse().join("");

//solution #2
// const reverse = str =>{
//     let reversedString = "";
//     for(let character of str){
//         reversedString = character + reversedString;
//     }
//     return reversedString;
// }

//solution #3
const reverse = str => {
    debugger;
    return str.split("").reduce((x,y) => y + x);
}
reverse('orange');

module.exports = reverse;
