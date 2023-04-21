function countCharacter(str, char) {
    // your code here
    let counter = 0;
    for (let letter of str) {
        if (letter == char) {
            counter++;
        }
    }
    return counter;
}

let output = countCharacter('I am a hacker', 'a');
console.log(output);