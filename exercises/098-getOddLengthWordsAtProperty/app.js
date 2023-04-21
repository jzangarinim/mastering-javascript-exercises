// Write your function here

function getOddLengthWordsAtProperty (obj, key) {
    let arr = [];
    if (!obj[key] || obj[key].length == 0 || !Array.isArray(obj[key])) {
        return [];
    }
    for (let value of obj[key]) {
        if (!(value.length % 2 == 0)) {
            arr.push(value);
        }
    }
    return arr;
}

let obj = {
    key: ['It', 'has', 'some', 'words']
};

let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output);