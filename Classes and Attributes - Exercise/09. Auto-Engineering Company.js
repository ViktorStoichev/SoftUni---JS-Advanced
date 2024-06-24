function autoEngineeringCompany(array) {
    let brandsList = new Map;

    for (let command of array) {
        let [carBrand, carModel, producedCars] = command.split(' | ');
        producedCars = Number(producedCars);

        if (!brandsList.has(carBrand)) {
            brandsList.set(carBrand, new Map);
        }

        if (!brandsList.get(carBrand).has(carModel)) {
            brandsList.get(carBrand).set(carModel, producedCars);
        } else {
            brandsList.get(carBrand).set(carModel, (brandsList.get(carBrand).get(carModel)) + producedCars);
        }
    }

    for (let [brand, models] of brandsList) {
        console.log(brand);
        for (let [model, totalProducedCars] of models) {
            console.log(`###${model} -> ${totalProducedCars}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',

    'Audi | Q6 | 100',
    
    'BMW | X5 | 1000',
    
    'BMW | X6 | 100',
    
    'Citroen | C4 | 123',
    
    'Volga | GAZ-24 | 1000000',
    
    'Lada | Niva | 1000000',
    
    'Lada | Jigula | 1000000',
    
    'Citroen | C4 | 22',
    
    'Citroen | C5 | 10'])