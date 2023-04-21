function filterEvenLengthWords(words) {
    // your code here
    let arr = [];
    for (let str of words) {
        if (str.length % 2 == 0) {
            arr.push(str);
        }
    }
    return arr;
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']