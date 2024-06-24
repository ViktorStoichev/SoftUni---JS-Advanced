import { expect } from "chai";
import { mathEnforcer } from "../04. Math Enforcer.js";

describe('Math Enforcer', () => {
    describe('addFive', () => {
        describe('number is valid', () => {
            it('should return undefined if the input is not a number', () => {
                expect(mathEnforcer.addFive('0')).to.be.undefined;
                expect(mathEnforcer.addFive([])).to.be.undefined;
                expect(mathEnforcer.addFive({})).to.be.undefined;
                expect(mathEnforcer.addFive(null)).to.be.undefined;
                expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            })
        })
        describe('correct result', () => {
            it('should return the correct result', () => {
                expect(mathEnforcer.addFive(0)).to.be.equal(5);
                expect(mathEnforcer.addFive(0.5)).to.be.equal(5.5);
                expect(mathEnforcer.addFive(-5)).to.be.equal(0);
                expect(mathEnforcer.addFive(-9.5)).to.be.equal(-4.5);
            })
        })
    })

    describe('subtractTen', () => {
        describe('number is valid', () => {
            it('should return undefined if the input is not a number', () => {
                expect(mathEnforcer.subtractTen('0')).to.be.undefined;
                expect(mathEnforcer.subtractTen([])).to.be.undefined;
                expect(mathEnforcer.subtractTen({})).to.be.undefined;
                expect(mathEnforcer.subtractTen(null)).to.be.undefined;
                expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            })
        })
        describe('correct result', () => {
            it('should return the correct result', () => {
                expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
                expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
                expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
                expect(mathEnforcer.subtractTen(-19.5)).to.be.equal(-29.5);
            })
        })
    })

    describe('sum', () => {
        describe('numbers are valid', () => {
            it('should return undefined if the two parameters are not a numbers', () => {
            expect(mathEnforcer.sum('5', 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, '5')).to.be.undefined;
            expect(mathEnforcer.sum(null, 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, null)).to.be.undefined;
            expect(mathEnforcer.sum(undefined, 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, undefined)).to.be.undefined;
            expect(mathEnforcer.sum({}, 5)).to.be.undefined;
            expect(mathEnforcer.sum(5, {})).to.be.undefined;
            })
        })
        describe('correct result', () => {
            it('should return the correct result', () => {
                expect(mathEnforcer.sum(20, 20)).to.be.equal(40);
                expect(mathEnforcer.sum(10.5, 19.2)).to.be.equal(29.7);
                expect(mathEnforcer.sum(-5, -3)).to.be.equal(-8);
                expect(mathEnforcer.sum(-2.5, -3.5)).to.be.equal(-6)
            })
        })
    })
})