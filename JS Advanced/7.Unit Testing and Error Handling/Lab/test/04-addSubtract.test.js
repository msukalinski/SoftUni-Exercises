import { expect } from "chai";
import { createCalculator } from '../modules.js';

describe('Test add - subtract function', () => {
    let result;

    beforeEach(() => {
        result = createCalculator();
    });

    it('should return a object,that includes add, subtract and get props', () => {
        expect(result).to.be.an('object').that.does.include.all.keys('add', 'subtract', 'get');
    });

    it('should return the value of the internal sum', () => {
        expect(result.get()).to.be.equal(0);
    });

    it ('should take paremeter that can be parsed in to Number', () => {
        result.add('1');
        result.subtract('1');

        expect(result.get()).to.be.equal(0);
    });

    it ('should keep an internal sum that cannot be modified from the outisde', () => {
        result.value = 100;

        expect(result.get()).to.not.be.equal(100);
        expect(result.get()).to.be.equal(0);
    });

    it('should correctly compute the value after the operations', () => {
        result.add(6);
        result.add('3');
        result.subtract('1');
        let value = result.get();
        expect(value).to.equal(8);
    });
});