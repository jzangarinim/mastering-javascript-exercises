function multiplyBetween(num1, num2) {
    // Your code here
    let product = 1;
    if (num2 < num1) return 0;
    while (num2 > num1) {
        product = product * num1;
        num1++;
    }
    return product;
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24