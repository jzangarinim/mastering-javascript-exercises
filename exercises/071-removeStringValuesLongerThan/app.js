function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let property in obj) {
    if (obj[property].length > num) {
      delete obj[property];
    }
  }
  return obj;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};
removeStringValuesLongerThan(6, obj);
console.log(obj);