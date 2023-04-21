function isOddLength(word){
    if (word.length % 2 == 0) {
        return false;
    } else {
        return true;
    }
}

let output = isOddLength('special');
console.log(output);