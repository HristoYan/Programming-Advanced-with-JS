function evenSolve(array) {
    let result = '';

    for (let i = 0; i < array.length; i += 2) {
        result += array[i] + ' ';
    }
    return result;
}

console.log(evenSolve(['5', '10']));