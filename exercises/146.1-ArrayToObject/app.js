function transformFirstAndLast(array) {
  // your code here
  let obj = {};
  obj[array[0]] = array[array.length - 1];
  return obj;
}

let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output); // { Queen: "Beyonce" }