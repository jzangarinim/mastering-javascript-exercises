function convertObjectToList(obj) {
  // your code here
  let arr = [];
  for (let key in obj) {
    let arr2 = [];
    arr2.push(key);
    arr2.push(obj[key]);
    arr.push(arr2);
  }
  return arr;
}

let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]