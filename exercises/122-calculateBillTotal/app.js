function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let salesTax = preTaxAndTipAmount * 0.095;
    let tip = preTaxAndTipAmount * 0.15;;
    return preTaxAndTipAmount + salesTax + tip;
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9