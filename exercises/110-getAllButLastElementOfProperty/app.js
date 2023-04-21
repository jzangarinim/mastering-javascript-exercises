let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let arr = [];
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return arr;

    for (let i = 0; i < obj[key].length - 1; i++) {
      arr.push(obj.key[i]);
    }
    return arr;
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]