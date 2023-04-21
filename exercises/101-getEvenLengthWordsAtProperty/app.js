let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    let arr = [];
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return arr;

    for (let value of obj[key]) {
      if (value.length % 2 == 0) {
        arr.push(value);
      }
    }
    return arr;
}

let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']