import { expect } from "chai";
import { isSymmetric } from '../modules.js';

describe('Test for symmetry', () => {
    it('should return false if the argument is string', () => {
        expect(isSymmetric('random')).to.be.equal(false);
    });

    it('should return true if the array is symmetric', () => {
        expect(isSymmetric([1, 2, 1])).to.be.equal(true);
    });

    it('should return true if the array is empty', () => {
        expect(isSymmetric([])).to.be.equal(true);
    });

    it('should return false if the array includes different types of data', () => {
        expect(isSymmetric(['asd', 1, {}, NaN])).to.be.equal(false);
    });

    it('should return false if the array includes primitive types', () => {
        expect(isSymmetric([undefined, NaN, false, true])).to.be.equal(false);
    });

    it('should return false if the array includes different data types', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.equal(false);
    });
});