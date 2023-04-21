let obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let arr = [];
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return arr;

    arr = obj[key].map(value => {
      return Math.pow(value, 2);
    })

    return arr;
}

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]