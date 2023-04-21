function convertDoubleSpaceToSingle(str) {
    // your code here
    let words = str.split("  ");
    let string = words.join(' ');
    return string;
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"