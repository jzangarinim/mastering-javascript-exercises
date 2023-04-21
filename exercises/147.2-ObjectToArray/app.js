function listAllValues(obj) {
  // your code here
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output); // ['Krysten', 33, false]