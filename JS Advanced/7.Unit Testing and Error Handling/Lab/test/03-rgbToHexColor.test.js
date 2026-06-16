import { expect } from "chai";
import { rgbToHexColor } from '../modules.js';

describe('Test RGB input', () => {
    it('should return undefined if some of the input numbers is out of range', () => {
        expect(rgbToHexColor(256, 255, 255)).to.be.equal(undefined);
        expect(rgbToHexColor(255, 256, 255)).to.be.equal(undefined);
        expect(rgbToHexColor(255, 255, 256)).to.be.equal(undefined);
        expect(rgbToHexColor(-1, 255, 255)).to.be.equal(undefined);
        expect(rgbToHexColor(255, -1, 255)).to.be.equal(undefined);
        expect(rgbToHexColor(255, 255, -1)).to.be.equal(undefined);
    });

    it('should return undefined if some of the input args is of an invalid type', () => {
        expect(rgbToHexColor('255', 255, 255)).to.be.equal(undefined);
        expect(rgbToHexColor(255, '255', 255)).to.be.equal(undefined);
        expect(rgbToHexColor(255, 255, '255')).to.be.equal(undefined);
    });

    it('should return undefined if there are less then 3 arguments', () => {
        expect(rgbToHexColor(255)).to.be.equal(undefined);
    });

    it('should return the color in hexadecimal format', () => {
        expect(rgbToHexColor(255, 0, 0)).to.be.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.be.equal('#00FF00');
    });
});