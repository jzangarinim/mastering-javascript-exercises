function addToBackOfNew(arr, element) {
    // Write your function here
    let newArr = [element];
    let final = arr.concat(newArr);
    return final;
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]