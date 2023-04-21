let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for (let property in obj) {
        if (typeof obj[property] == 'number' && obj[property] < num) {
            delete obj[property];
        }
    }
    return obj;
}

removeNumbersLessThan(5, obj);
console.log(obj);