// Write your function here

function findMinLengthOfThreeWords (word1, word2, word3) {
    let min = Math.min(word1.length, word2.length, word3.length);
    return min;
}

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);