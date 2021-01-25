function bigElSolve(array) {
    let result = Number.MIN_SAFE_INTEGER;

    for (const arr of array) {
        for (let i = 0; i < arr.length; i++) {
            let temp = arr[i];
            if(temp > result) {
                result = temp;
            }
            
        }
    }
    return result;
}

console.log(bigElSolve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   
   ));