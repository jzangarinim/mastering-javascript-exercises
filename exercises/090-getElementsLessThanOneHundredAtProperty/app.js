// Write your function here

function getElementsLessThan100AtProperty (obj, key) {
    let arr = []
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return []
    }
    for (let value of obj[key]) {
        if (value < 100) {
            arr.push(value);
        }
    }
    return arr;
}

let obj = {
    key: [1000, 20, 50, 500]
}

let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);