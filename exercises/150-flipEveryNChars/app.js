function flipEveryNChars(input, n) {
    // your code here
    let str = input.split('');
    let word = '';
    let inputIsOdd;
    let lastChar;
    let lastChar2;
    if (str.length % n !== 0) {
        if (str.length % n == 2) {
            lastChar2 = str.pop()
        }
        inputIsOdd = true;
        lastChar = str.pop();
    }
    for (let i = 0; i < str.length; i = i + n) {
        let j = n;
        while (j > 0) {
            word += str[i + j - 1];
            j--;
        }
        //word += str[i + 4] + str[i + 3] + str[i + 2] + str[i + 1] + str[i];
    }
    if (inputIsOdd) {
        word += lastChar2 + lastChar;
    }
    return word
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma