// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     return str === str.split("").reduce((x,y) => y+x);
// }

// const palindrome = str => str === str.split("").reduce((x,y) => y + x);

const palindrome = str =>{
    return str.split("").every((x,index) => {
        return str[str.length - 1 - index] === x;
    })
}

//efficient a little
// const palindrome = str =>{
//     const arr = str.split("");
//     for(let i = 0;i<(arr.length / 2);i++){
//         if(arr[i] !== arr[arr.length - 1 - i]) return false;
//     }
//     return true;
// }

module.exports = palindrome;
