function citySolve(array) {
    let goods = {};
    let result = [];
    for (const line of array) {
        let [town, product, price] = line.split(' | ');

        if (!goods[product]) {
            goods[product] = { town, price: Number(price) };
        } else {
            goods[product] = goods[product].price > Number(price) ? { town, price: Number(price) } : goods[product];
        }

    }
    for (const product in goods) {
        result.push(`${product} -> ${goods[product].price} (${goods[product].town})`);
    }
    return result.join('\n');
}

console.log(citySolve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));