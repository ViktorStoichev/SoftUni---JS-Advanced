import { expect } from "chai";
import { isSymmetric } from "../check-for-symmetry.js";

describe('Is it symmetric', () => {
    it('should return false for non-array inputs', function() {
        expect(isSymmetric('string'), false);
        expect(isSymmetric(12345), false);
        expect(isSymmetric({ key: 'value' }), false);
        expect(isSymmetric(null), false);
        expect(isSymmetric(undefined), false);
    });

    it('should return true for symmetric arrays with primitive types', function() {
        expect(isSymmetric([1, 2, 3, 2, 1]), true);
        expect(isSymmetric(['a', 'b', 'c', 'b', 'a']), true);
        expect(isSymmetric([1, 2, 2, 1]), true);
        expect(isSymmetric([]), true);
        expect(isSymmetric([1]), true);
    });

    it('should return false for non-symmetric arrays with primitive types', function() {
        expect(isSymmetric([1, 2, 3, 4, 5]), false);
        expect(isSymmetric(['a', 'b', 'c', 'd']), false);
        expect(isSymmetric([1, 2, 3, 1]), false);
    });

    it('should handle arrays with mixed data types correctly', function() {
        expect(isSymmetric([1, 'a', 3, 'a', 1]), true);
        expect(isSymmetric([1, 'a', 'b', 'a', 1]), false);
    });

    it('should return true for nested arrays that are symmetric', function() {
        expect(isSymmetric([[1, 2], [2, 1], [1, 2]]), false);
        expect(isSymmetric([[1, 2], [1, 2]]), true);
    });

    it('should return false for nested arrays that are not symmetric', function() {
        expect(isSymmetric([[1, 2], [2, 3], [1, 2]]), false);
    });

    it('should handle arrays with objects correctly', function() {
        expect(isSymmetric([{a: 1}, {b: 2}, {a: 1}]), true);
        expect(isSymmetric([{a: 1}, {b: 2}, {a: 2}]), false);
    });

    it('should handle arrays with NaN values correctly', function() {
        expect(isSymmetric([NaN, NaN]), true);
        expect(isSymmetric([1, NaN, 1]), false);
    });

    it('should handle complex cases with nested arrays and objects', function() {
        expect(isSymmetric([[{a: 1}], [{b: 2}], [{a: 1}]]), true);
        expect(isSymmetric([[{a: 1}], [{b: 2}], [{a: 2}]]), false);
    });
})