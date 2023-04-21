function getLengthOfLongestElement(arr) {
    // Your code here
    if (!arr || arr.length == 0) return 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    return max;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5