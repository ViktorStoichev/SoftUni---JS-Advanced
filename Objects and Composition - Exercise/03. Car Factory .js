function carFactory(car) {
    if (car.power <= 90) {
        car.engine = {power: 90, volume: 1800};
    } else if (car.power <= 120) {
        car.engine = {power: 120, volume: 2400};
    } else {
        car.engine = {power: 200, volume: 3500};
    }
    delete car.power;

    let typeCarriage = car.carriage;
    delete car.carriage;
    car.carriage = {type: typeCarriage, color: car.color};
    delete car.color;

    if (car.wheelsize % 2 === 0) {
        car.wheelsize -= 1;
    }
    let wheelsDiameter = new Array(4).fill(car.wheelsize);
    delete car.wheelsize;
    car.wheels = wheelsDiameter;

    return car;
}

carFactory({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 } )