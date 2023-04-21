function getLongestElement(arr) {
    // your code here
    let max = '';
    if (!arr) return '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max.length) {
            max = arr[i];
        }
    }
    return max;
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'