class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphone = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (model.length === 0 || storage < 0
            || price < 0 || condition.length === 0) {
            throw new Error('Invalid smartphone!');
        } else {
            this.availableSmartphone.push({ model, storage, price, condition });
            return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
        }
    }

    sellSmartphone(model, desiredStorage) {
        let isFound = false;
        for (let phone of this.availableSmartphone) {
            if (phone.model === model) {
                isFound = true;
                if (phone.storage >= desiredStorage) {
                    phone.price = phone.price;
                } else if (Math.abs(phone.storage - desiredStorage) <= 128) {
                    phone.price -= phone.price * 0.10;
                } else if (Math.abs(phone.storage - desiredStorage) > 128) {
                    phone.price -= phone.price * 0.20;
                }
                let soldModel = phone.model;
                let soldStorage = phone.storage;
                let soldPrice = phone.price;
                this.soldSmartphones.push({ soldModel, soldStorage, soldPrice });
                this.availableSmartphone.splice(this.availableSmartphone.indexOf(phone), 1);
                this.revenue += soldPrice;
                return `${model} was sold for ${soldPrice.toFixed(2)}$`
            }
        }
        if (!isFound) {
            throw new Error(`${model} was not found!`);
        }
    }

    upgradePhones() {
        if (this.availableSmartphone.length > 0) {
            for (let phone of this.availableSmartphone) {
                phone.storage *= 2;
            }
            let result = `Upgraded Smartphones:`
            for (let phone of this.availableSmartphone) {
                result += `\n${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`
            }
            return result;
        } else {
            throw new Error("There are no available smartphones!");
        }
    }

    salesJournal(criteria) {
        if (criteria === 'storage') {
            this.soldSmartphones.sort((a, b) => b.soldStorage - a.soldStorage);
        } else if (criteria === 'model') {
            this.soldSmartphones.sort((a, b) => a.soldModel.localeCompare(b.soldModel));
        } else {
            throw new Error("Invalid criteria!");
        }
        let result = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n${this.soldSmartphones.length} smartphones sold:`;
        for (let phone of this.soldSmartphones) {
            result += `\n${phone.soldModel} / ${phone.soldStorage} GB / ${phone.soldPrice.toFixed(2)}$`
        }
        return result
    }
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000,
// 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800,
// 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));