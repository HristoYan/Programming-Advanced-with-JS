function negPosNum(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
        
    }
    return newArr;
}

console.log(negPosNum([3, -2, 0, -1]));