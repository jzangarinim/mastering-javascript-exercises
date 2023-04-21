function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let max = 0;
    if (!arr || arr.length == 0) return max;
    for (let value of arr) {
        if (typeof value == 'number' && value > max) {
            max = value;
        }
    }
    if (max == 0) return 0;
    return max;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5