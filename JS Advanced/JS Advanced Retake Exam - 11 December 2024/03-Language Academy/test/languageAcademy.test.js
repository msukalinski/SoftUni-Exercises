import { expect } from 'chai';
import { languageAcademy } from '../languageAcademy.js';

describe("Tests for languageAcademy object", function() {

    describe("difficultyLevel test", function() {
        it("should return correct message for 'Beginner' course type", function() {
            const result = languageAcademy.difficultyLevel("Beginner");
            expect(result).to.equal("The course is beginner-friendly and focuses on basic concepts like greetings, numbers, and common phrases.");
        });

        it("should return correct message for 'Intermediate' course type", function() {
            const result = languageAcademy.difficultyLevel("Intermediate");
            expect(result).to.equal("The course is moderately challenging and includes grammar rules, sentence structure, and conversational practice.");
        });

        it("should return correct message for 'Advanced' course type", function() {
            const result = languageAcademy.difficultyLevel("Advanced");
            expect(result).to.equal("The course is highly challenging and covers advanced vocabulary, idioms, and specialized topics like business or technical language.");
        });

        it("should return error message for invalid course type", function() {
            const result = languageAcademy.difficultyLevel("Expert");
            expect(result).to.equal("Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'.");
        });
    });

    describe("discountbyNumber test", function() {
        it("should return no discount message for 1 course", function() {
            const result = languageAcademy.discountbyNumber(1, 100);
            expect(result).to.equal("You cannot apply a discount.");
        });

        it("should apply a 10% discount for 2 courses", function() {
            const result = languageAcademy.discountbyNumber(2, 100);
            expect(result).to.equal("Discount applied! You saved 10$ on your courses.");
        });

        it("should apply a 25% discount for more than 3 courses", function() {
            const result = languageAcademy.discountbyNumber(4, 200);
            expect(result).to.equal("Discount applied! You saved 50$ on your courses.");
        });

        it("should throw an error for invalid input (non-numeric values)", function() {
            expect(() => languageAcademy.discountbyNumber("2", "100")).to.throw("Invalid input.");
        });

        it("should throw an error for invalid input (missing numberOfCourses)", function() {
            expect(() => languageAcademy.discountbyNumber(2)).to.throw("Invalid input.");
        });
    });

    describe("additionalResources test", function() {
        const resourceCatalog = [
            { name: "Book", price: 20 },
            { name: "Audio", price: 30 },
            { name: "Video", price: 50 }
        ];

        it("should calculate total cost correctly for needed resources", function() {
            const neededResources = ["Book", "Audio"];
            const result = languageAcademy.additionalResources(resourceCatalog, neededResources);
            expect(result).to.equal("Total Cost is 50$.");
        });

        it("should return 0 total cost if no resources match", function() {
            const neededResources = ["Flashcards"];
            const result = languageAcademy.additionalResources(resourceCatalog, neededResources);
            expect(result).to.equal("Total Cost is 0$.");
        });

        it("should throw an error for invalid input (non-array resourceCatalog)", function() {
            expect(() => languageAcademy.additionalResources({}, ["Book"])).to.throw("Invalid input.");
        });

        it("should throw an error for invalid input (non-array neededResources)", function() {
            expect(() => languageAcademy.additionalResources([], "Book")).to.throw("Invalid input.");
        });
    });
});