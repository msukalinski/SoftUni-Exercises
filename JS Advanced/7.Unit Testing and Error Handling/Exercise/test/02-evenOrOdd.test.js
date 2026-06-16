import { expect } from "chai";
import {isOddOrEven} from '../modules.js';

describe('Test the length of a passed string', () => {
    it('should return odd if the given string length is odd number', () => {
        expect(isOddOrEven('cat')).to.be.equal('odd');
    });

    it('should return even if the given string length is even number', () => {
        expect(isOddOrEven('wolf')).to.be.equal('even');
    });

    it('should return undefined if the passed argument is not a string', () => {
        expect(isOddOrEven([])).to.be.equal(undefined);
        expect(isOddOrEven(2)).to.be.equal(undefined);
        expect(isOddOrEven({})).to.be.equal(undefined);
        expect(isOddOrEven(undefined)).to.be.equal(undefined);
    });
});