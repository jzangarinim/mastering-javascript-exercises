// Write your function here

function removeElement (arr, discarder) {
    let filtered = [];
    if (arr.length == 0) {
        return [];
    }

    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] == discarder)) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);