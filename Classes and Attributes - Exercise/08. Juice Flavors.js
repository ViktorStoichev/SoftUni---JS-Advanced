function juiceFlavors(array) {
    let flavorsQuantity = {};
    let bottles = new Map;

    for (let command of array) {
        let [flavor, quantity] = command.split(' => ');
        quantity = Number(quantity);

        if (!flavorsQuantity.hasOwnProperty(flavor)) {
            flavorsQuantity[flavor] = quantity;
        } else {
            flavorsQuantity[flavor] += quantity;
        }

        if (flavorsQuantity[flavor] >= 1000) {
            if (!bottles.has(flavor)) {
                bottles.set(flavor, 0);
            }
        }

        if (flavorsQuantity[flavor] >= 1000) {
            while (flavorsQuantity[flavor] >= 1000) {
                bottles.set(flavor, (bottles.get(flavor)) + 1);
                flavorsQuantity[flavor] -= 1000;
            }
        }
    }

    for (let [key, value] of bottles) {
        console.log(`${key} => ${value}`);
    }
}

juiceFlavors(['Orange => 2000',

    'Peach => 1432',
    
    'Banana => 450',
    
    'Peach => 600',
    
    'Strawberry => 549'])