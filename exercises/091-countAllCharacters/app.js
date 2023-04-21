// Write your function here
function countAllCharacters (str) {
    let obj = {};
    if (str.length == 0) {
        return {};
    }
    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = 1;
        } else {
            obj[str[i]]++;
        }
    }
    return obj;
}

let output = countAllCharacters('banana');
console.log(output);