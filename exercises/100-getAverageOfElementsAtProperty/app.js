function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let i = 0;
  if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) return 0;
  let sum = 0;
  for (i = 0; i < obj[key].length; i++) {
    sum += obj.key[i];
  }
  return sum / i;
}

let obj = {
  key: [1, 2, 3]
};

let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);