function findSmallestElement(arr) {
    // your code here
    let min = 100;
    if (!arr || arr.length == 0) return 0;

    for (let value of arr) {
        if (value < min) {
            min = value;
        }
    }
    return min;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1