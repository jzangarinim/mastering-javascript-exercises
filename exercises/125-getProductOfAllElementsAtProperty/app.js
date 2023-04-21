let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if (!obj[key] || obj[key] == 0 || !Array.isArray(obj[key])) return 0;
    let product = 1;
    for (let value of obj[key]) {
      product = product * value;
    }
    return product;
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24