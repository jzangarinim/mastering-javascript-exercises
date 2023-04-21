function flipPairs(input){
    // your code here
    let str = input.split('');
    let word = '';
    let inputIsOdd;
    let lastChar;
    if (str.length % 2 !== 0) {
        inputIsOdd = true;
        lastChar = str.pop();
    }
    for (let i = 0; i < str.length; i = i + 2) {
        word += str[i + 1] + str[i];
    }
    if (inputIsOdd) {
        word += lastChar;
    }
    return word
}

let input = 'check out how interesting this problem is, it\'s insanely interesting!';
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
