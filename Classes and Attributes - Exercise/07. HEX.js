class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        let resultValue;
        if (number instanceof Hex) {
            resultValue = this.value + number.valueOf();
        } else {
            resultValue = this.value + number;
        }
        return new Hex(resultValue);
    }

    minus(number) {
        let resultValue;
        if (number instanceof Hex) {
            resultValue = this.value - number.valueOf();
        } else {
            resultValue = this.value - number;
        }
        return new Hex(resultValue);
    }

    parse(hexString) {
        return parseInt(hexString, 16);
    }
}

let FF = new Hex(255);

console.log(FF.toString());

FF.valueOf() + 1 == 256;

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');

console.log(FF.parse('AAA'));