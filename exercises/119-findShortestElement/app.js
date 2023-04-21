function findShortestElement(arr) {
    // your code here
    let min = 'pneumonoultramicroscopicsilicovolcanoconiosis';
    if (!arr || arr.length == 0) return '';

    for (let str of arr) {
        if (str.length < min.length) {
            min = str;
        }
    }
    return min;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'