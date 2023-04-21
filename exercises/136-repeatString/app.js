function repeatString(string, num) {
    // your code here
    let repeat = '';
    for (let i = 1; i <= num; i++) {
        repeat += string;
    }
    return repeat;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'