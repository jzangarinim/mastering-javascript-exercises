// Write your function here

function select (arr, obj) {
    let newObj = {};
    for (let value of arr) {
        if (obj[value]) {
            newObj[value] = obj[value];
        }
    }
    return newObj;
}

let arr = ['a', 'c', 'e'];
let obj = {
    a: 1, 
    b: 2,
    c: 3,
    d: 4
}

let output = select(arr, obj);
console.log(output);