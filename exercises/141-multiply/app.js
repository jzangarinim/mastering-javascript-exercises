function multiply(num1, num2) {
    // your code here
    let aux = 1;
    let product = 0;
    if (num2 > 0 && num1 > 0 || num1 < 0) {
        while (aux <= num2) {
            product += num1;
            aux++;
        }
    } else if (num2 < 0 && num1 > 0 || num1 < 0) {
        while (aux <= num1) {
            product += num2;
            aux++
        }
    }
    return product;
}

let output = multiply(-4, -7);
console.log(output); // --> 28