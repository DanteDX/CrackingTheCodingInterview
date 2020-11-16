// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str){
    const vowels = ["a","e","i","o","u"];
    let vowelNumber = 0;
    for(let character of str){
        if(vowels.includes(character.toLowerCase())) vowelNumber++;
    }
    return vowelNumber;
}

module.exports = vowels;
