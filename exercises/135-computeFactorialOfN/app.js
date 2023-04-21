function computeFactorialOfN(n) {
    // your code here
    let product = 1;
    for (let i = n; i >= 1; i--) {
        product = product * i;
    }
    return product;
}

let output = computeFactorialOfN(3);
console.log(output); // --> 6