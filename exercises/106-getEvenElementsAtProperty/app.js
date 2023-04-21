
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    let arr = [];
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return arr;

    for (let value of obj[key]) {
      if (value % 2 == 0) {
        arr.push(value);
      }
    }
    return arr;
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]