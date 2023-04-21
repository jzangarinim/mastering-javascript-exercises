function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let max = '';
    word1.length > max.length ? max = word1 : max;
    word2.length > max.length ? max = word2 : max;
    word3.length > max.length ? max = word3 : max;
    return max;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'