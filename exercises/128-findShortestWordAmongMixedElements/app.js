function findShortestWordAmongMixedElements(arr) {
    // your code here
    let min = 'pneumonoultramicroscopicsilicovolcanoconiosis';
    if (!arr || arr.length == 0) return '';

    for (let value of arr) {
        if (typeof value == 'string') {
            if (value.length < min.length) {
                min = value;
            }
        }
    }
    if (min == 'pneumonoultramicroscopicsilicovolcanoconiosis') {
        return '';
    }
    return min;
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'