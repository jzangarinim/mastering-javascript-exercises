function modulo(num1, num2) {
    // your code here
    if (isNaN(num1) || isNaN(num2)) return NaN;
    let aux = num1;
    if (num1 > 0) {
        while (!(Number.isInteger(num1 / num2))) {
            num1--;
        }
    } else if (num1 < 0) {
        while (!(Number.isInteger(num1 / num2))) {
            num1++
        }
    }
    return aux - num1;
}

let output = modulo(-25, 4);
console.log(output); // --> 1