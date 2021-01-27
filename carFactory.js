function carSolve(obj) {
    let car = {
        model: '',
        engine: {
            power: 0,
            volume: 0
        },
        carriage: {
            type: '',
            color: ''
        },
        wheels: [],
    }
    const engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];
    const model = obj.model;
    car.model = model;
    
    for (const {power, volume} of engines) {
        if (obj.power <= power) {
            car.engine.power = power;
            car.engine.volume = volume;
            break;
        }

    }
    car.carriage.type = obj.carriage;
    car.carriage.color = obj.color;
    let wheel = obj.wheelsize % 2 !== 0 ? obj.wheelsize : obj.wheelsize - 1;
    car.wheels = [wheel, wheel, wheel, wheel];
    return car;
}

console.log(carSolve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

));