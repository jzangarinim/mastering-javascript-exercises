let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    let arr = [];
    let max = 0;
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return arr;

    for (let value of obj[key]) {
      if (value > max) {
        max = value;
      }
    }
    return max;
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4