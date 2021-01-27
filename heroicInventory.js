function solve(array) {

    let allHeroes = [];
    while (array.length) {
        let [name, level, itemsStr] = array.shift().split(' / ');

        level = Number(level);

        let items = itemsStr ? itemsStr.split(', ') : [];

        allHeroes.push({ name, level, items });
    }
    return JSON.stringify(allHeroes);
}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 ']

));