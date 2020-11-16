// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// following solution has time complexity of O(nlog(n))
function cleanUp(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
function anagrams(stringA, stringB) {
  stringA = cleanUp(stringA);
  stringB = cleanUp(stringB);
  return stringA === stringB;
}

//following solution has time complexity of O(n)
// function anagrams(stringA, stringB) {
//     stringA = stringA.replace(/[^\w]/g,"").toLowerCase();
//     stringB = stringB.replace(/[^\w]/g,"").toLowerCase();
//     let charMapA = {};
//     let charMapB = {};
//     for(let character of stringA){
//         charMapA[character] = charMapA[character] + 1 || 1 ;
//     }
//     for(let character of stringB){
//         charMapB[character] = charMapB[character] + 1 || 1 ;
//     }
//     if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
//     for(let character in charMapA){
//         if(!charMapB[character]){
//             return false;
//         }else if(charMapB[character] !== charMapA[character]){
//             return false;
//         }
//     }
//     return true;
// }

module.exports = anagrams;
