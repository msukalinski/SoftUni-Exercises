import { expect } from "chai";
import { onlineStore } from "../03-onlineStore.js";

describe('onlineStore Object test', () => {
    describe('isProductAvailable function test', () => {
        it('should validate the input properly', () => {
            expect(() => onlineStore.isProductAvailable('Potato', '1')).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable(1, 1)).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable(['Potato'], 1)).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable('Potato', [1])).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable('Potato', undefined)).to.throw('Invalid input.');
            expect(() => onlineStore.isProductAvailable(undefined, 1)).to.throw('Invalid input.');
        });

        it('should return message "product out of stock" if stocQty is less than or equal to 0', () => {
            expect(onlineStore.isProductAvailable('Potato', 0)).to.be.equal('Sorry, Potato is currently out of stock.');
            expect(onlineStore.isProductAvailable('Potato', -1)).to.be.equal('Sorry, Potato is currently out of stock.');
        });

        it('should return available products if the stockQty is greater than 0', () => {
            expect(onlineStore.isProductAvailable('Potato', 1)).to.be.equal('Great! Potato is available for purchase.');
        });
    });

    describe('canAffordProduct function test', () => {
        it('should validate the input properly', () => {
            expect(() => onlineStore.canAffordProduct(1, '1')).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct('1', 1)).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct([1], 1)).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct(1, [1])).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct(1, undefined)).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct(undefined, 1)).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct({}, 1)).to.throw('Invalid input.');
            expect(() => onlineStore.canAffordProduct(1, {})).to.throw('Invalid input.');
        });

        it('should calc if the user can afford to buy the product', () => {
            expect(onlineStore.canAffordProduct(2, 1)).to.be.equal(`You don't have sufficient funds to buy this product.`);
            expect(onlineStore.canAffordProduct(2, 2)).to.be.equal('Product purchased. Your remaining balance is $0.');
            expect(onlineStore.canAffordProduct(2, 3)).to.be.equal('Product purchased. Your remaining balance is $1.');
        });
    });

    describe('getRecommendedProducts function test', () => {
        it('should validate the input properly', () => {
            expect(() => onlineStore.getRecommendedProducts('[]', 'category')).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts([], ['category'])).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts({}, 'category')).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts([], {})).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts(1, 'category')).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts('category', 1)).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts(undefined, 'category')).to.throw('Invalid input.');
            expect(() => onlineStore.getRecommendedProducts([], undefined)).to.throw('Invalid input.');
        });

        it('should find and retur product names tha match the specified category', () => {
            expect(onlineStore.getRecommendedProducts([{ name: 'Camera', category: 'Photo' }], 'Photo')).to.be.equal('Recommended products in the Photo category: Camera');
            expect(onlineStore.getRecommendedProducts([{ name: 'Camera', category: 'Photo' }, { name: 'DVD', category: 'Media' }], 'Media')).to.be.equal('Recommended products in the Media category: DVD');
            expect(onlineStore.getRecommendedProducts([{ name: 'Camera', category: 'Media' }, { name: 'DVD', category: 'Media' }], 'Media')).to.be.equal('Recommended products in the Media category: Camera, DVD');
        });
    });
});