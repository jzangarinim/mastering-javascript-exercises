// Write your function here
function getAverageOfElementsAtProperty (obj, key) {
    let sum = 0;
    if (!obj[key] || obj[key].length == 0) {
        return 0;
    }
    for (let value of obj[key]) {
        sum += value;
    }

    return sum / obj[key].length;
}

let obj = {
    key: [1, 2, 3]
}

let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);