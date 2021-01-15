function oddSolve(array) {
    let oddPositions = [];
    for (let i = 1; i < array.length; i += 2) {
        oddPositions.push(array[i]);

    }
    let result = oddPositions.map(x => x * 2).reverse();
    return result;
}

console.log(oddSolve([10, 15, 20, 25]));