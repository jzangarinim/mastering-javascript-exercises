function transformEmployeeData(array) {
  // your code here
  let result = [];
  for (let value of array) {
    let obj = {};
    for (let arr of value) {
      obj[arr[0]] = arr[1];
    }
    result.push(obj);
  }
  return result;
}

let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]