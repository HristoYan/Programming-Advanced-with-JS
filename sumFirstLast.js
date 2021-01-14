function sumSolve(array) {
    array = array.map(Number);
    let first = array.shift();
    let last = 0;
    if (array.length >= 1) {
        last = array.pop();
    }
    let result = first + last;
    return result;
}

console.log(sumSolve(['5']));