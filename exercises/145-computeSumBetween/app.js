function computeSumBetween(num1, num2) {
    // Your code here
    let sum = 0;
    if (num2 < num1) return 0;
    while (num1 < num2) {
        sum += num1;
        num1++;
    }
    return sum;
}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9