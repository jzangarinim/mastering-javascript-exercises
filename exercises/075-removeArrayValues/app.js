function removeArrayValues(obj) {
    // your code here
    for (let property in obj) {
        if (Array.isArray(obj[property])) {
            delete obj[property];
        }
    }
    return obj;
}

let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
}

removeArrayValues(obj);
console.log(obj);