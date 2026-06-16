import { expect } from "chai";
import { lookupChar } from '../modules.js';

describe('Test lookupChar function', () => {
    it('should return undefined if the input parameters are incorrect', () => {
        expect(lookupChar(12, 4)).to.be.equal(undefined);
        expect(lookupChar('cat', 'b')).to.be.equal(undefined);
        expect(lookupChar('cat', 3.14)).to.be.equal(undefined);
        expect(lookupChar('cat', undefined)).to.be.equal(undefined);
    });

    it('should return incorrect index if the value of the index is out of range', () => {
        expect(lookupChar('cat', 3)).to.be.equal('Incorrect index');
        expect(lookupChar('cat', 4)).to.be.equal('Incorrect index');
        expect(lookupChar('cat', -1)).to.be.equal('Incorrect index');
    });

    it('should return the character if both types and values are correct', () => {
        expect(lookupChar('cat', 0)).to.be.equal('c');
        expect(lookupChar('cat', 1)).to.be.equal('a');
        expect(lookupChar('cat', 2)).to.be.equal('t');
    });
});