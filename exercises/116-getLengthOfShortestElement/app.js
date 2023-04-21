function getLengthOfShortestElement(arr) {
    // your code here
    if (!arr | arr.length == 0) return 0;
    let min = 100;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < min) {
            min = arr[i].length;
        }
    }
    return min;
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3