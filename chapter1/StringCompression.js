const strComp = (str) => {
  let result = [];
  let counter = 0;
  for (let char of str) {
    if (result.length === 0) {
      result.push(char);
      counter++;
      result.push(counter.toString());
      continue;
    }
    if (char === result[result.length - 2]) {
      counter++;
      result[result.length - 1] = counter.toString();
      continue;
    }
    if (char !== result[result.length - 2]) {
      result.push(char);
      counter = 1;
      result.push(counter.toString());
      continue;
    }
  }
  return result.join("");
};

console.log("aaaaaa", strComp("aaaaaa"), "a6");
console.log("aabcccccaaa", strComp("aabcccccaaa"), "a2b1c5a3");
