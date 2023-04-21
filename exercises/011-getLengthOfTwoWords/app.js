function getLengthOfTwoWords(word1, word2) {
  // your code here
  let lengthOne = 0;
  let lengthTwo = 0;
  for (let letter of word1) {
    lengthOne++
  }
  for (let letter of word2) {
    lengthTwo++;
  }
  return lengthOne + lengthTwo;
}

let output = getLengthOfTwoWords('some','words');
console.log(output);