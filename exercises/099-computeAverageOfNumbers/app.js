// Write your function here !

function computeAverageOfNumbers (arr) {
    let sum = 0;
    let i = 0;
    if (!arr || arr.length == 0) return 0;
    
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / i;
}

let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output);