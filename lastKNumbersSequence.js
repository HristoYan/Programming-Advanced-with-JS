function kNumSolve(n, k) {
    let resultArr = [1];
    for (let i = 1; i < n; i++) {
        let subArr = resultArr.slice(-k);
        let num = subArr.reduce((a, b) => a + b, 0);
        resultArr.push(num);
    }
    return resultArr;
}

console.log(kNumSolve(6, 3));