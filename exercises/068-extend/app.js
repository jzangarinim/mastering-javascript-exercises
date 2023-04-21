let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    for (let property in obj2){
        if (obj2.hasOwnProperty(property) && !obj1.hasOwnProperty(property)) {
            obj1[property] = obj2[property];
        }
    }
    return obj1;
}

extend(obj1, obj2);

console.log(obj1);
console.log(obj2);