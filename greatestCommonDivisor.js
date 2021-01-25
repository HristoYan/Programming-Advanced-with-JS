function greatestSolve(numOne, numTwo) {
    
    while (numTwo !== 0) {
        let temp = numTwo;
        numTwo = numOne % numTwo;
        numOne = temp;
    }
    console.log(numOne);
}

greatestSolve(2154, 458);