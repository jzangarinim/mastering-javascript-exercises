function getStringLength(string) {
    // your code here
    let length = 0;
    for (let letter of string) {
        length++;
    }
    return length;
}

let output = getStringLength('hello');
console.log(output); // --> 5