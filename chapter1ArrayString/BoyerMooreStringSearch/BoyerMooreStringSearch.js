/* Best Case: all characters of the pattern are the same and of length T,
and W is the place where the string search has begun.
Best Case, time O(T/W), space O(1)
###########################################################################
Worst Case: All pattern is at the end of the string ,
and the preceding string has all unique characters,
time, O(T * W)
space, O(T)
###########################################################################

Generally, this algorithm just skips few steps of matching allowing the matching
process to be faster
*/

function BoyerMoore(str, pattern) {
  function charMapGenerator(pattern) {
    let charMap = {};
    for (let char of pattern) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  }
  let charMap = charMapGenerator(pattern);
  let offSet = 0;
  let patternLastIndex = pattern.length - 1;
  let maxOffSet = str.length - pattern.length;
  if (maxOffSet < 0) return false;

  while (offSet <= maxOffSet) {
    let scanIndex = 0;
    while (pattern[scanIndex] === str[offSet + scanIndex]) {
      if (scanIndex === patternLastIndex) {
        return offSet;
      }
      scanIndex++;
    }
    let badMatchString = str[offSet + patternLastIndex];
    if (charMap[badMatchString]) {
      offSet += charMap[badMatchString];
    } else {
      offSet += 1;
    }
  }
  return -1;
}

module.exports = BoyerMoore;
