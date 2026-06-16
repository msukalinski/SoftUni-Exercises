import { expect } from "chai";
import { mathEnforcer } from '../modules.js';

describe('Test math enforcer object', () => {
    let obj;

    beforeEach(() => {
        obj = mathEnforcer;
    });

    it('should return undefined if the parameter is not a number', () => {
        expect(obj.addFive('err')).to.be.equal(undefined);
        expect(obj.addFive(['err', 2])).to.be.equal(undefined);
        expect(obj.addFive({})).to.be.equal(undefined);
        expect(obj.subtractTen('err')).to.be.equal(undefined);
        expect(obj.subtractTen(['err', 2])).to.be.equal(undefined);
        expect(obj.subtractTen({})).to.be.equal(undefined);
    });

    it('should add 5 to the input parameter and return the result', () => {
        expect(obj.addFive(5)).to.equal(10);
        expect(obj.addFive(-5)).to.equal(0);
        expect(obj.addFive(0)).to.equal(5);
        expect(obj.addFive(1.5)).to.equal(6.5);
    });

    it('should subtract 10 from the input parameter and return the result', () => {
        expect(obj.subtractTen(20)).to.equal(10);
        expect(obj.subtractTen(10)).to.equal(0);
        expect(obj.subtractTen(0)).to.equal(-10);
        expect(obj.subtractTen(-10)).to.equal(-20);
        expect(obj.subtractTen(1.5)).to.equal(-8.5);
    });

    it('should return undefined if any of the parameters is not a number', () => {
        expect(obj.sum('s', 1)).to.be.equal(undefined);
        expect(obj.sum(1, 's')).to.be.equal(undefined);
        expect(obj.sum([], 1)).to.be.equal(undefined);
        expect(obj.sum(1, [])).to.be.equal(undefined);
        expect(obj.sum(undefined, 1)).to.be.equal(undefined);
        expect(obj.sum(1, undefined)).to.be.equal(undefined);
    });

    it('should return the sum of the parameters if their type is number', () => {
        expect(obj.sum(1, 1)).to.equal(2);
        expect(obj.sum(-1, 1)).to.equal(0);
        expect(obj.sum(1.5, 2.5)).to.equal(4);
        expect(obj.sum(-1.5, -2.5)).to.equal(-4);
    });
});