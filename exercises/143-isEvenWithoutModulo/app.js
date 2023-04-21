function isEvenWithoutModulo(num) {
    // your code here
    let result = Number.isInteger(num/2) ? true : false;
    return result;
}
let output = isEvenWithoutModulo(8);
console.log(output); // --> true