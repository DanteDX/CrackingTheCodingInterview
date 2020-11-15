/* given a string, find the longest substring with all the unique characters are included
at least once */

function shortestSubstring(givenString) {
  function charMapGenerator(str) {
    let charMapInside = {};
    for (let char of str) {
      charMapInside[char] = charMapInside[char] + 1 || 1;
    }
    return charMapInside;
  }

  let charMap = charMapGenerator(givenString);
  let smallestLength = Object.keys(charMap).join("").length;
  let pointerStart = 0;
  let pointerEnd = pointerStart + smallestLength - 1;
  let subStrings = [];
  let incrementEndPointer = false;

  while (pointerEnd < givenString.length) {
    let tempString = givenString.slice(pointerStart, pointerEnd + 1);
    incrementEndPointer = false;
    let tempStringMap = charMapGenerator(tempString);
    for (let key in charMap) {
      if (!tempStringMap[key]) {
        pointerEnd++;
        incrementEndPointer = true;
        break;
      }
    }
    if (incrementEndPointer === false) {
      subStrings.push(tempString);
      pointerStart = pointerEnd + 1;
      pointerEnd += smallestLength;
    }
  }
  let min = subStrings[0].length;
  for (let i = 1; i < subStrings.length; i++) {
    if (subStrings[i].length < min) {
      min = subStrings[i].length;
    }
  }
  console.log(subStrings);
  return min;
}

console.log(shortestSubstring("adsadsadsadassssadadadsadasdsads"));
