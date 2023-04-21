function getProperty(obj, key) {
  // your code here
  if (obj[key]) {
    return obj[key];
  }
}

let car = {
  model: 'Toyota'
}

console.log(getProperty(car, 'model'))