function fruitSolve(fruit, weigthInG, pricePerKg) {
    const weightInKg = weigthInG / 1000;
    const money = weightInKg * pricePerKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruitSolve('apple', 1563, 2.35)