function squareElements(arr) {
  // your code here
  let square = [];
  square = arr.map(value => {
    return Math.pow(value, 2);
  })
  return square;
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]