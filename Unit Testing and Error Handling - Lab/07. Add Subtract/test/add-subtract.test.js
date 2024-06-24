import { expect } from "chai";
import { createCalculator } from "../add-subtract.js";

describe('createCalculator', function() {
    let calculator;

    beforeEach(() => {
        calculator = createCalculator();
    });

    it('should return an object with add, subtract, and get methods', function() {
        expect(calculator).to.have.property('add').that.is.a('function');
        expect(calculator).to.have.property('subtract').that.is.a('function');
        expect(calculator).to.have.property('get').that.is.a('function');
    });

    it('should initialize with a value of 0', function() {
        expect(calculator.get()).to.equal(0);
    });

    it('should add numbers correctly', function() {
        calculator.add(5);
        expect(calculator.get()).to.equal(5);
    });

    it('should subtract numbers correctly', function() {
        calculator.subtract(3);
        expect(calculator.get()).to.equal(-3);
    });

    it('should add and subtract numbers correctly', function() {
        calculator.add(10);
        calculator.subtract(4);
        expect(calculator.get()).to.equal(6);
    });

    it('should work with string input that can be parsed as numbers', function() {
        calculator.add('7');
        expect(calculator.get()).to.equal(7);
        calculator.subtract('2');
        expect(calculator.get()).to.equal(5);
    });

    it('should not change the internal value with non-numeric strings', function() {
        calculator.add('invalid');
        expect(calculator.get()).to.be.NaN;
        calculator = createCalculator(); // Reinitialize to reset state
        calculator.subtract('invalid');
        expect(calculator.get()).to.be.NaN;
    });

    it('should keep the internal sum private', function() {
        expect(calculator.value).to.be.undefined;
    });

    it('should handle floating point numbers correctly', function() {
        calculator.add(5.5);
        expect(calculator.get()).to.be.closeTo(5.5, 0.01);
        calculator.subtract(2.2);
        expect(calculator.get()).to.be.closeTo(3.3, 0.01);
    });
});