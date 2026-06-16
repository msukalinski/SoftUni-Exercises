import { expect } from "chai";
import { petAdoptionAgency } from '../03-petAdoptionAgency.js';

describe('petAdoptionAgency Object test', () => {
    describe('isPetAvailable function test', () => {
        it('should throw an error if input is invalid', () => {
            expect(() => petAdoptionAgency.isPetAvailable(2, 1, true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', '1', true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', 1, 'true')).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', [], true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', 1, 1)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable(true, 1, true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', true, 1)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable(['dog'], 1, true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', 1, [])).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable(undefined, 1, true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', undefined, true)).to.throw('Invalid input');
            expect(() => petAdoptionAgency.isPetAvailable('dog', 1, undefined)).to.throw('Invalid input');
        });

        it('should return "no pets available" msg if availableCount is less than or equal to 0', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', 0, true)).to.be.equal('Sorry, there are no dog(s) available for adoption at the agency.');
            expect(petAdoptionAgency.isPetAvailable('dog', -1, true)).to.be.equal('Sorry, there are no dog(s) available for adoption at the agency.');
        });

        it('should return count and type of vaccinated pet(s) if vaccinated value is true', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', 1, true)).to.be.equal('Great! We have 1 vaccinated dog(s) available for adoption at the agency.')
        });

        it('should return count and type of non-vaccinated pet(s) for adoption, if vaccinated value is false', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', 1, false)).to.be.equal('Great! We have 1 dog(s) available for adoption, but they need vaccination.')
        });
    });

    describe('getRecommendedPets function test', () => {
        it('should throw an eror if the input is invalid', () => {
            expect(() => petAdoptionAgency.getRecommendedPets('dog', 'traits').to.throw('Invalid input'));
            expect(() => petAdoptionAgency.getRecommendedPets([], 2).to.throw('Invalid input'));
            expect(() => petAdoptionAgency.getRecommendedPets(undefined, 2).to.throw('Invalid input'));
            expect(() => petAdoptionAgency.getRecommendedPets([], undefined).to.throw('Invalid input'));
            expect(() => petAdoptionAgency.getRecommendedPets([], []).to.throw('Invalid input'));
            expect(() => petAdoptionAgency.getRecommendedPets(2, []).to.throw('Invalid input'));
        });

        it('should return recommended pets with the desired traits', () => {
            expect(petAdoptionAgency.getRecommendedPets([{ name: 'Sharo', traits: 'traits' }, { name: 'Rex', traits: 'traits' }], 'traits')).to.be.equal('Recommended pets with the desired traits (traits): Sharo, Rex');
        });

        it('should return no recommended pets msg if there are no matching pets found', () => {
            expect(petAdoptionAgency.getRecommendedPets([{ name: 'Sharo', traits: 'traits' }, { name: 'Rex', traits: 'traits' }], 'Blue Nose')).to.be.equal('Sorry, we currently have no recommended pets with the desired traits: Blue Nose.');
        });
    });

    describe('adoptPet function test', () => {
        it('should throw an error if the input is invalid', () => {
            expect(() => petAdoptionAgency.adoptPet(2, 'Mario').to.throw('Invalid input'));
            expect(() => petAdoptionAgency.adoptPet('dog', 2).to.throw('Invalid input'));
            expect(() => petAdoptionAgency.adoptPet('dog', undefined).to.throw('Invalid input'));
            expect(() => petAdoptionAgency.adoptPet(undefined, 'Mario').to.throw('Invalid input'));
            expect(() => petAdoptionAgency.adoptPet('dog', ['Mario']).to.throw('Invalid input'));
            expect(() => petAdoptionAgency.adoptPet(['dog'], 'Mario').to.throw('Invalid input'));
        });

        it('should return success message if the args are valid', () => {
            expect(petAdoptionAgency.adoptPet('dog', 'Mario')).to.be.equal('Congratulations, Mario! You have adopted dog from the agency. Enjoy your time with your new furry friend!');
        });
    });
});