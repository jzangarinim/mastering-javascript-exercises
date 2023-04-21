function getLongestWordOfMixedElements(arr) {
    // your code here
    let aux = '';
    if (!arr || arr.length == 0) return aux;
    for (let str of arr) {
        if (typeof str == 'string' && str.length > aux.length) {
            aux = str;
        }
    }
    if (aux == '') return '';
    return aux;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'