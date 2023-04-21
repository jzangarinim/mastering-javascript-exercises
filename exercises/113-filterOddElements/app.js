function filterOddElements(arr) {
  // your code here
    let odds = [];
    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] % 2 == 0)) {
        odds.push(arr[i]);
      }
    }
    return odds;
}

let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]