/* for a palindrome string permutation, if string.length is even,
all character counts must be even, and if string.length is odd, then 
all character countes must be even && there must be only one unique character */

const palinPerm = (str) => {
  let strFiltered = [];
  strFiltered = str.split("").filter((char) => char !== " ");
  strFiltered = strFiltered.join("").toLowerCase();

  let isEven = false;
  if (strFiltered.length % 2 === 0) {
    isEven = true;
  }

  let charMap = {};
  for (let char of strFiltered) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  if (isEven) {
    for (let key in charMap) {
      if (charMap[key] % 2 !== 0) return false;
    }
  } else {
    let singleFlag = false;
    for (let key in charMap) {
      if (charMap[key] === 1) {
        if (singleFlag) {
          return false;
        }else if(singleFlag === false){
            singleFlag = true;
            continue;
        }
        
      }
      if (charMap[key] % 2 !== 0) return false;
    }
    return true;
  }
};

console.log(palinPerm("Tact Coa"), "true");
console.log(palinPerm("Tact boa"), "false");
