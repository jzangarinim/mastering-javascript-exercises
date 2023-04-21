function filterOddLengthWords(words) {
    // your code here
    let arr = [];
    if (!words || words.length == 0) return arr;

    for (let value of words) {
        if (!(value.length % 2 == 0)) {
            arr.push(value);
        }
    }
    return arr;
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']