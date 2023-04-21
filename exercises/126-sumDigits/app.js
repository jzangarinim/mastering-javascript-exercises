function sumDigits(num) {
    // your code here
    let sum = 0;
    let aux = num.toString();
    for (let i = 0; i < aux.length; i++) {
        if (aux[i] === '-') {
            sum = -(Number(aux[i+1]));
            i++;
        } else {
            sum += Number(aux[i]);
        }
    }
    return sum;
}
let output = sumDigits(-316);
console.log(output); // --> 4