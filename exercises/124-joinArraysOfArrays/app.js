function joinArrayOfArrays(arr) {
  // your code here
  let comb = [];
  for (let i = 0; i < arr.length; i++) {
    comb = comb.concat(arr[i]);
  }
  return comb;
}
let output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']