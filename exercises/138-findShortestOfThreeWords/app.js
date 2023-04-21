function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let min = 'pneumonoultramicroscopicsilicovolcanoconiosis';
    word1.length < min.length ? min = word1 : min;
    word2.length < min.length ? min = word2 : min;
    word3.length < min.length ? min = word3 : min;
    return min;
}
let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'