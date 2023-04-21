// Write your function here

function isSameLength (str1, str2) {
    if (str1.length == str2.length) {
        return true;
    } else {
        return false;
    }
}

let output = isSameLength('words', 'super');
console.log(output);