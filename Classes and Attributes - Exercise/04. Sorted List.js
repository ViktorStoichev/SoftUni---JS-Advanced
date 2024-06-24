class List {
    numbers = [];
    constructor() {
        this.size = this.numbers.length;
    }

    add(value) {
        this.numbers.push(value);
        this.numbers.sort((a, b) => a - b);
        this.size = this.numbers.length;
    }

    remove(index) {
        if (index >= 0 && index < this.numbers.length) {
            this.numbers.splice(index, 1);
            this.numbers.sort((a, b) => a - b);
            this.size = this.numbers.length;
        }
    }

    get(index) {
        if (index < this.numbers.length) {
            return this.numbers[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
console.log(list.size);
list.remove(1);
console.log(list.get(1));
console.log(list.size);