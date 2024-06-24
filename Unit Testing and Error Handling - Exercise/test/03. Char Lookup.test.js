import { assert } from "chai";
import { lookupChar } from "../03. Char Lookup.js";

describe('Char Lookup', () => {
    describe('validString', () => {
        it('should return undefined if the first parameter is not a string', function() {
            assert.strictEqual(lookupChar(123, 0), undefined);
            assert.strictEqual(lookupChar({}, 0), undefined);
            assert.strictEqual(lookupChar([], 0), undefined);
            assert.strictEqual(lookupChar(null, 0), undefined);
            assert.strictEqual(lookupChar(undefined, 0), undefined);
        });
    })
    
    describe('validInteger', () => {
        it('should return undefined if the second parameter is not an integer', function() {
            assert.strictEqual(lookupChar('test', '0'), undefined);
            assert.strictEqual(lookupChar('test', 0.5), undefined);
            assert.strictEqual(lookupChar('test', []), undefined);
            assert.strictEqual(lookupChar('test', {}), undefined);
            assert.strictEqual(lookupChar('test', null), undefined);
            assert.strictEqual(lookupChar('test', undefined), undefined);
        });
    })
    
    describe('validIndex', () => {
        it('should return an incorrect index if the index is out of bounds', () => {
            assert.equal(lookupChar('test', 4), 'Incorrect index');
            assert.equal(lookupChar('test', -1), 'Incorrect index');
            assert.equal(lookupChar('test', 100), 'Incorrect index');
        })
    })
    
    describe('correctResult', () => {
        it('should return the correct result', () => {
            assert.equal(lookupChar('test', 2), 's');
            assert.equal(lookupChar('test', 1), 'e');
            assert.equal(lookupChar('test', 0), 't');
        })
    })
})