import { expect } from "chai";
import { planYourTrip } from "../02-planYourTrip.js";

describe('Object testing', () => {
    describe('choosingDestination function test', () => {
        it('should throw an error if year value is different than 2024', () => {
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Winter', 2023)).to.throw('Invalid Year!');
        });

        it('should throw an error if destination value is different than "Ski Resort"', () => {
            expect(() => planYourTrip.choosingDestination('Different', 'Winter', 2024)).to.throw('This destination is not what you are looking for.');
        });

        it('should return a message "Great choice.." if the requirements are met and the season is Winter', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.be.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.');
        });

        it('should return message, "Consider visitin during the Winter" if season value is diff than Winter', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.be.equal('Consider visiting during the Winter for the best experience at the Ski Resort.');
        });
    });

    describe('exploreOptions function test', () => {
        it('should throw an error if any of the arguments value is invalid', () => {
            expect(() => planYourTrip.exploreOptions(2, 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions({}, 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions('someStr', 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(undefined, 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions([], '2')).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(['Marty', 'Party'], 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(['Marty', 'Party'], -1)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(['Marty', 'Party'], 3.14)).to.throw('Invalid Information!');
        });

        it('should return the array properly after the modification', () => {
            expect(planYourTrip.exploreOptions(['Marty', 'Party', 'Pasta', 'Shrooms'], 1)).to.be.equal('Marty, Pasta, Shrooms');
        });
    });

    describe('estimateExpenses function test', () => {
        it('should throw an error if distance or fuelCost values are non-numbers', () => {
            expect(() => planYourTrip.estimateExpenses('5', 5)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(5, '5')).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses('5', '5')).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(0, 5)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(5, 0)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(-1, 5)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(5, -1)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(5, undefined)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(undefined, 5)).to.throw('Invalid Information!');
        });

        it('should return output with totalCost > 500 properly', () => {
            expect(planYourTrip.estimateExpenses(100, 10)).to.be.equal('The estimated cost for the trip is $1000.00, plan accordingly.');
        });

        it('should return the output properly if totalCost is less or equal to 500', () => {
            expect(planYourTrip.estimateExpenses(50, 10)).to.be.equal('The trip is budget-friendly, estimated cost is $500.00.');
            expect(planYourTrip.estimateExpenses(49, 10)).to.be.equal('The trip is budget-friendly, estimated cost is $490.00.');
        });
    });
});