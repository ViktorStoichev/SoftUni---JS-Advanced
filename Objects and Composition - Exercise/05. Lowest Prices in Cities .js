function findTheLowestPrices(array) {
    let info = {};

    for (let command of array) {
        let [town, product, price] = command.split(" | ");
        productPrice = Number(price);

        if (!info[product] || info[product].price > productPrice) {
            info[product] = {
                price: productPrice,
                town: town
            };
        }
    }

    for (let currentProduct in info) {
        console.log(`${currentProduct} -> ${info[currentProduct].price} (${info[currentProduct].town})`);
    }
}

findTheLowestPrices(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])