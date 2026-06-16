import { expect } from "chai";
import { foodDelivery } from "../03-foodDelivery.js";

describe('foodDelivery Object test', () => {
    describe('getCategory function test', () => {
        it('should throw an error if products are diff from "Vegan", "Vegetarian", "Gluten-Free", "All"', () => {
            expect(() => foodDelivery.getCategory('Different')).to.throw('Invalid Category!');
        });

        it('should return specific message if the category arg value is correct', () => {
            expect(foodDelivery.getCategory('Vegan')).to.be.equal('Dishes that contain no animal products.');
            expect(foodDelivery.getCategory('Vegetarian')).to.be.equal('Dishes that contain no meat or fish.');
            expect(foodDelivery.getCategory('Gluten-Free')).to.be.equal('Dishes that contain no gluten.');
            expect(foodDelivery.getCategory('All')).to.be.equal('All available dishes.');
        });
    });

    describe('addMenuItem function test', () => {
        it('should throw an error if the input is incorrect', () => {
            expect(() => foodDelivery.addMenuItem([{ name: 'name', price: 5 }], 4)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([], 5)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem('Str', 5)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{ name: 'name', price: 5 }], '5')).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem(5, [])).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem({}, 5)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{ name: 'name', price: 5 }], {})).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem(undefined, 5)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{ name: 'name', price: 5 }], undefined)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{ name: 'name', price: 5 }], -1)).to.throw('Invalid Information!');
        });

        it('should return available items if the price is less or equal to maxPrice', () => {
            expect(foodDelivery.addMenuItem([{ name: 'name', price: 5 }], 5)).to.be.equal('There are 1 available menu items matching your criteria!');
            expect(foodDelivery.addMenuItem([{ name: 'name', price: 6 }], 5)).to.be.equal('There are 0 available menu items matching your criteria!');
            expect(foodDelivery.addMenuItem([{ name: 'name', price: 5 }, { name: 'some', price: 10 }], 10)).to.be.equal('There are 2 available menu items matching your criteria!');
            expect(foodDelivery.addMenuItem([{ name: 'name', price: 5 }, { name: 'some', price: 11 }], 10)).to.be.equal('There are 1 available menu items matching your criteria!');
        });
    });

    describe('calculateOrderCost function test', () => {
        it('should throw an error if the input is incorrect', () => {
            expect(() => foodDelivery.calculateOrderCost('arr', [], true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], 'arr', true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], [], 'true')).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(1, [], true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], 1, true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], [], 1)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], [], [])).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], true, true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(true, [], true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(undefined, [], true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], undefined, true)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost([], [], undefined)).to.throw('Invalid Information!');
        });

        it('should return totalSum of the shipping and addons', () => {
            expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], true)).to.be.equal('You spend $10.63 for shipping and addons with a 15% discount!')
            expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], false)).to.be.equal('You spend $12.50 for shipping and addons!');
            expect(foodDelivery.calculateOrderCost(['standard', 'standard'], ['sauce', 'sauce'], false)).to.be.equal('You spend $8.00 for shipping and addons!');
            expect(foodDelivery.calculateOrderCost(['standard', 'standard'], ['sauce', 'sauce'], true)).to.be.equal('You spend $6.80 for shipping and addons with a 15% discount!');
            expect(foodDelivery.calculateOrderCost(['express', 'express'], ['sauce', 'sauce'], false)).to.be.equal('You spend $12.00 for shipping and addons!');
            expect(foodDelivery.calculateOrderCost(['express', 'express'], ['sauce', 'sauce'], true)).to.be.equal('You spend $10.20 for shipping and addons with a 15% discount!');
            expect(foodDelivery.calculateOrderCost(['express', 'express'], ['beverage', 'beverage'], false)).to.be.equal('You spend $17.00 for shipping and addons!');
            expect(foodDelivery.calculateOrderCost(['express', 'express'], ['beverage', 'beverage'], true)).to.be.equal('You spend $14.45 for shipping and addons with a 15% discount!');
        });
    });
});