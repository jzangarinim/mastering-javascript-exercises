function isOddWithoutModulo(num) {
    // your code here
    let result = !(Number.isInteger(num/2)) ? true : false;
    return result;
}
let output = isOddWithoutModulo(6);
console.log(output); // --> true