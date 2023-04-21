function removeFromBackOfNew(arr) {
  // your code here
  let result = arr.filter(index => index < arr.length);
  return result;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output);
console.log(arr);