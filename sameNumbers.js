function sameSolve(num) {
    num += '';
    const arr = num.split('').map(Number);
    let sum = 0;
    let isSame = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] && arr[i + 1] !== undefined) {
            isSame = false;
        }
        sum += arr[i];
    }
    console.log(isSame + '\n' + sum);
}

sameSolve(1234);