import { expect } from "chai";
import { sum } from "../04. Sum of Numbers.js";

describe('Sum', () => {
    it('Should sum', () => {
        const input = [1, 2, 3];
        const expectedResult = 6;

        const actualResult = sum(input);

        expect(actualResult).to.equal(expectedResult);
    })
})