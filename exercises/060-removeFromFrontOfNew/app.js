function removeFromFrontOfNew(arr) {
    // your code here
    let newArr = arr.filter(index => index > 1);
    return newArr;
}

let arr = [1, 2, 3];
let output = removeFromFrontOfNew(arr);
console.log(output);
console.log(arr);