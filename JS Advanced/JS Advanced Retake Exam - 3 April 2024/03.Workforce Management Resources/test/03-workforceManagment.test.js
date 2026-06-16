import { expect } from 'chai';
import { workforceManagement } from '../03-workforceManagement.js';

describe('Test worforceManagement object', () => {
    describe('recruitStaff function test', () => {
        it('should throw an error if the role is different from "Developer" or experience is lower than 4', () => {
            expect(() => workforceManagement.recruitStaff('Marty', 'Driver', 4)).to.throw('We are not currently hiring for this role.');
        });

        it('should return message that the person is not suitable if the requirements are not met', () => {
            expect(workforceManagement.recruitStaff('Marty', 'Developer', 2)).to.be.equal('Marty is not suitable for this role.');
        });

        it('should return message that the person is successfully recruited', () => {
            expect(workforceManagement.recruitStaff('Marty', 'Developer', 4)).to.be.equal('Marty has been successfully recruited for the role of Developer.');
            expect(workforceManagement.recruitStaff('Marty', 'Developer', 5)).to.be.equal('Marty has been successfully recruited for the role of Developer.');
        });

        describe('computeWages function test', () => {
            it('should return invalid hours if the argument is not a number', () => {
                expect(() => workforceManagement.computeWages('15')).to.throw('Invalid hours');
                expect(() => workforceManagement.computeWages(-1)).to.throw('Invalid hours');
                expect(() => workforceManagement.computeWages(undefined)).to.throw('Invalid hours');
                expect(() => workforceManagement.computeWages([15])).to.throw('Invalid hours');
                expect(() => workforceManagement.computeWages({})).to.throw('Invalid hours');
            });

            it('should return the worker payment correctly', () => {
                expect(workforceManagement.computeWages(100)).to.be.equal(100 * 18);
                expect(workforceManagement.computeWages(161)).to.be.equal(161 * 18 + 1500);
            });
        });

        describe('dismissEmployee function test', () => {
            it('should return invalid input if one of the parameter is invalid', () => {
                expect(() => workforceManagement.dismissEmployee({}, 2)).to.throw('Invalid input');
                expect(() => workforceManagement.dismissEmployee({})).to.throw('Invalid input');
                expect(() => workforceManagement.dismissEmployee(['Gosho', 'Pesho'], '2')).to.throw('Invalid input');
                expect(() => workforceManagement.dismissEmployee(['Gosho', 'Pesho'], 2)).to.throw('Invalid input');
                expect(() => workforceManagement.dismissEmployee(['Gosho', 'Pesho'], -1)).to.throw('Invalid input');
                expect(() => workforceManagement.dismissEmployee(['Gosho', 'Pesho', 'Stamat', 'Martin'], 3.14)).to.throw('Invalid input');
            });

            it('should return manipulated array properly', () => {
                expect(workforceManagement.dismissEmployee(['Gosho', 'Pesho', 'Stamat', 'Martin'], 2)).to.be.equal('Gosho, Pesho, Martin');
            });
        });
    });
});