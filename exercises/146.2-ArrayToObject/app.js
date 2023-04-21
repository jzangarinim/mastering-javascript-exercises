function fromListToObject(array) {
  // your code here
  let obj = {};
  for (let value of array) {
    obj[value[0]] = value[1];
  }
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }