function getAllLetters(str) {
    // your code here
    let newArr = [];
    for (let letter of str) {
        newArr.push(letter);
    }
    return newArr;
}

let output = getAllLetters('Radagast');
console.log(output);