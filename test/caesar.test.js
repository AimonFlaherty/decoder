// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar tests", () => {
    describe("Encoding edge cases", () => {
        it("should return 'z' for letter 'a' and shift ammount -1", () => {
            const expected = "z";
            const actual = caesar("a", -1);
            expect(actual).to.equal(expected);
        });
    });
});
