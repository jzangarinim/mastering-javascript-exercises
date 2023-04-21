function getLargestElement(arr) {
  // your code here
  if (!arr) return 0;
  let max = 0;

  for (let value of arr) {
    if (value > max) {
      max = value;
    }
  }
  return max;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;