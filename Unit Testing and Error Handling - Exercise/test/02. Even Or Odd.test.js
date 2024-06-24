import { assert } from "chai";
import { isOddOrEven } from "../02. Even Or Odd.js";

describe('Even Or Odd', () => {
    describe('validType', () => {
        it('Should return false for non-string inputs', function() {
            assert.isNotOk(isOddOrEven(['string']), undefined);
            assert.isNotOk(isOddOrEven(12345), undefined);
            assert.isNotOk(isOddOrEven({ key: 'value' }), undefined);
            assert.isNotOk(isOddOrEven(null), undefined);
            assert.isNotOk(isOddOrEven(undefined), undefined);
        });
    })
    
    describe('evenOrOdd', () => {
        it('Should return even string length', () => {
            assert.equal(isOddOrEven('string'), 'even');
        })
    
        it('Should return odd string length', () => {
            assert.equal(isOddOrEven('stringg'), 'odd');
        })
    })
})

