// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {};
    for(let character of str){
        charMap[character] = (charMap[character] + 1) || 1 ;
        // if(!charMap[character]){
        //     charMap[character] = 1;
        // }else{
        //     charMap[character]++
        // }
    }
    // console.log(charMap);
    let max = 0;
    let maxChar = "";

    for(let character in charMap){
        if(charMap[character] > max){
            max = charMap[character];
            maxChar = character;
        }
    }
    return maxChar;
}

// maxChar('aaaabbbccddeeffff');

module.exports = maxChar;
