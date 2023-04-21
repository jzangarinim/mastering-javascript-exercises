function getLengthOfWord(word) {
  // your code here
  let i = 0;
  for (let letter of word) {
    i++
  }
  return i;
}

let output = getLengthOfWord('some');
console.log(output);