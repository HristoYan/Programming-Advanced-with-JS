function diagonalSolve(array) {
    let mainSum = 0;
    let secSum = 0;

    for (let i = 0; i < array.length; i++) {
        const line = array[i];
        for (let j = 0; j < line.length; j++) {
            if (i == j) {
                mainSum += line[j];
                secSum += line[line.length - i - 1];
                break;
            }
        }

    }
    console.log(mainSum, secSum);
}

diagonalSolve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);