function storeCatalogue(array) {
    let sorted = array.sort((a, b) => a.localeCompare(b));
    let dividor;
    
    for (let command of sorted) {
        let [product, price] = command.split(" : ");

        if (product[0] === dividor) {
            console.log(`  ${product}: ${price}`);
        } else {
            console.log(product[0]);
            console.log(`  ${product}: ${price}`);
        }
        dividor = product[0];
    }
}

storeCatalogue(["Appricot : 20.4", 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])