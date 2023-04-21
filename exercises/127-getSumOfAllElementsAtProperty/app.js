let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let sum = 0;
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return sum;

    for (let value of obj[key]) {
        sum += value;
    }
    return sum;
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13