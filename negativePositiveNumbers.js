function negPosNum(array) {
    let sorted = array.sort((a, b) => a - b);
    let result = '';
    for (const num of sorted) {
        result += num + ''+ '\n'
    }
    return result;
}

console.log(negPosNum([3, -2, 0, -1]));