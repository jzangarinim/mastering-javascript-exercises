// Write your function here

function getElementsThatEqual10AtProperty (obj, key) {
    let arr = [];
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return [];
    }
    for (let value of obj[key]) {
        if (value == 10) {
            arr.push(value);
        }
    }
    return arr;
}

let obj = {
    key: [1000, 10, 50, 10]
}

let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);