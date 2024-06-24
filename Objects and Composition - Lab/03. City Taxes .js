function cityTaxes(name, population, treasury) {
    let obj = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * (percentage / 100));
        }
    }

    return obj;
}


// function cityTaxes(name, population, treasury) {
//     return {
//         name, population, treasury,
//         taxRate: 10,
//         collectTaxes() {
//             this.treasury += this.population * this.taxRate;
//         },
//         applyGrowth(percent) {
//             this.population += Math.floor(this.population * percent / 100);
//         },
//         applyRecession(percent) {
//             this.treasury -= Math.floor(this.treasury * percent / 100);
//         },
//     };
// }


let myCity = cityTaxes('Tortuga', 7000, 15000);
console.log(myCity);

myCity.collectTaxes();
console.log(myCity.treasury);

myCity.applyGrowth(5);
console.log(myCity.population);

myCity.applyRecession(10);
console.log(myCity.treasury);