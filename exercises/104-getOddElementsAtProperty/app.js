let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here
    let arr = [];
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return [];

    for (let value of obj[key]) {
      if (!(value % 2 == 0)) {
        arr.push(value);
      }
    }
    return arr;
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]