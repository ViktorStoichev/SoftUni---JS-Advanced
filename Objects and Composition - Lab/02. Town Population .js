function townPopulation(array) {
    let townsObj = {};

    for (let command of array) {
        let [town, population] = command.split(" <-> ");

        if (!townsObj.hasOwnProperty(town)) {
            townsObj[town] = Number(population);
        } else {
            townsObj[town] += Number(population);
        }
    }

    let entries = Object.entries(townsObj);
    entries.forEach(el => console.log(`${el[0]} : ${el[1]}`));
}

townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])