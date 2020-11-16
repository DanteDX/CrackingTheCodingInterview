// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//my solution, time complexity O(n), space complexity O(n2)
function pyramid(n) {
  const baseHashNumber = 2 * n - 1;
  for (let row = 0; row < n; row++) {
    let hashNumber = 2 * (row + 1) - 1;
    let spaceNumber = 0.5 * (baseHashNumber - hashNumber);
    let result =
      new Array(spaceNumber).fill(" ").join("") +
      new Array(hashNumber).fill("#").join("") +
      new Array(spaceNumber).fill(" ").join("");
    console.log(result);
  }
}



module.exports = pyramid;
