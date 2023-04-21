let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    let arr = [];
    let min = 100;
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return arr;

    for (let value of obj[key]) {
      if (value < min) {
        min = value;
      }
    }
    return min;
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1