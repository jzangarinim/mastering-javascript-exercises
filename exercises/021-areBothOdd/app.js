// Write your function here

function areBothOdd (num1, num2) {
    if (num1 % 2 == 0 || num2 % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

let output = areBothOdd(1, 3);
console.log(output);