function kNumSolve(n, k) {
    let resultArr = [1, 1, 2];
    for (let i = 3; i < n; i++) {
        let subArr = resultArr.slice(-k);
        let num = subArr.reduce((a, b) => a + b, 0);
        resultArr.push(num);
    }
    return resultArr;
}

console.log(kNumSolve(8, 2));