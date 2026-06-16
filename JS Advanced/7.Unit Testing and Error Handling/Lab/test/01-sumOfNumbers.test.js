import { expect } from 'chai';
import { sum } from '../modules.js';

describe('Sum of numbers test', () => {
    it('should return the sum of the numbers from an array', () => {
        expect(sum([1, 2, 3])).to.be.equal(6);
    });
});