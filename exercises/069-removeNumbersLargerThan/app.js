let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLargerThan(num, obj) {
    // your code here
    for (let property in obj) {
        if (typeof obj[property] == 'number' && obj[property] > num) {
            delete obj[property];
        }
    }
    return obj;
}

removeNumbersLargerThan(5, obj);
console.log(obj);