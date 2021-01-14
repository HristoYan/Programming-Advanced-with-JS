function bigHalfSolve(array) {
    let sorted = array.sort((a, b) => a - b);
    let n = array.length / 2;
    if (array.length % 2 !== 0) {
        n += 1;
    }
    let result = sorted.slice(-n);
    return result;
}

console.log(bigHalfSolve([3, 19, 14, 7, 2, 19, 6]));