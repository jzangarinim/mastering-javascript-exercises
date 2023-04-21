function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let aux = 100000;
  if (!arr || arr.length == 0) return 0;
  for (let value of arr) {
    if (typeof value == 'number') {
      if (value < aux) {
        aux = value;
      }
    }
  }
  if (aux == 100000) return 0;
  return aux;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4