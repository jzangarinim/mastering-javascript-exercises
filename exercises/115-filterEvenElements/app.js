
function filterEvenElements(arr) {
    // your code here
    let filter = arr.filter(value => value % 2 == 0);
    return filter;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
