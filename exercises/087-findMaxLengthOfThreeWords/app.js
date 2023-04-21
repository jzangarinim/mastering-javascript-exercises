// Write your function here

function findMaxLengthOfThreeWords (word1, word2, word3) {
    let max = Math.max(word1.length, word2.length, word3.length);
    return max;
}

let output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);