function addToFrontOfNew(arr, element) {
    // Write your function here
    let newArr = [element]
    let final = newArr.concat(arr);
    return final;
}

let input = [1, 2];
let output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]