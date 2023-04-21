// Write your function here

function getIndexOf (char, str) {
    let position = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            position = i;
            return position;
        } else if (i == str.length - 1 && position == 0) {
            return -1;
        }
    }
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output);