import { expect } from "chai";
import { PaymentPackage } from "../modules.js";

describe('Testing class paymentPackage', () => {

    describe('Test for valid props', () => {
        it('should check if all props are valid', () => {
            let initInstance = new PaymentPackage('Loa', 12);
            expect(initInstance).to.have.property('_name');
            expect(initInstance).to.have.property('_value');
            expect(initInstance).to.have.property('_VAT');
            expect(initInstance).to.have.property('_active');
        });

        it('should return the correct values', () => {
            let pack = new PaymentPackage('Marty', 12);
            expect(pack.name).to.be.equal('Marty');
            expect(pack.value).to.be.equal(12);
        });
    });

    describe("Test for name type, get and set", () => {
        it('should throw an error if the name value is empty or non-string', () => {
            expect(() => new PaymentPackage('', 15)).to.throw('Name must be a non-empty string');
            expect(() => new PaymentPackage(1, 15)).to.throw('Name must be a non-empty string');
        });

        it('should test if get and set the name properly', () => {
            let pack = new PaymentPackage('Adre', 18);
            pack.name = 'Pesho';
            expect(pack.name).to.be.equal('Pesho');
        });
    });

    describe("Test value type, get and set", () => {
        it('should throw an error if num value is negative or its type is non-number', () => {
            expect(() => new PaymentPackage('Adre', 'Seve')).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Adre', '12')).to.throw('Value must be a non-negative number');
            expect(() => new PaymentPackage('Adre', -1)).to.throw('Value must be a non-negative number');
        });

        it('should test if get and set the value properly', () => {
            let pack = new PaymentPackage('Adre', 18);
            pack.value = 1;
            expect(pack.value).to.be.equal(1);
        });
    });

    describe('Test VAT value type, get and set', () => {
        it('should throw an error if VAT value is negative or its type is non-number', () => {
            let pack = new PaymentPackage('Adre', 18);
            expect(() => { pack.VAT = '20' }).to.throw('VAT must be a non-negative number');
            expect(() => { pack.VAT = -1 }).to.throw('VAT must be a non-negative number');
        });

        it('should set and get VAT properly', () => {
            let pack = new PaymentPackage('Adre', 18);
            pack.VAT = 40;
            expect(pack.VAT).to.be.equal(40);
        });
    });

    describe('Test active status value if its of the correct type, get and set', () => {
        it('should throw an error if active value is not boolean', () => {
            let pack = new PaymentPackage('Adre', 18);
            expect(() => { pack.active = 'false' }).to.throw('Active status must be a boolean');
            expect(() => { pack.active = null }).to.throw('Active status must be a boolean');
            expect(() => { pack.active = undefined }).to.throw('Active status must be a boolean');
        });

        it('should set and get the active status properly', () => {
            let pack = new PaymentPackage('Adre', 18);
            pack.active = true;
            expect(pack.active).to.be.equal(true);
        });
    });

    describe('Test the toString method if it prints the output correctly', () => {
        it('should return the output correctly if active', () => {
            let pack = new PaymentPackage('Adre', 1000);
            let expectedOutput = ['Package: Adre', '- Value (excl. VAT): 1000', '- Value (VAT 20%): 1200'].join('\n');
            expect(pack.toString()).to.be.equal(expectedOutput);
        });

        it('should return the output correctly if inactive', () => {
            let pack = new PaymentPackage('Adre', 1000);
            pack.active = false;
            let expectedOutput = ['Package: Adre (inactive)', '- Value (excl. VAT): 1000', '- Value (VAT 20%): 1200'].join('\n');
            expect(pack.toString()).to.be.equal(expectedOutput);
        });
    });
});