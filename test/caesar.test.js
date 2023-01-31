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
        it("should return 'ab' for letter 'yz' and shift ammount 2", () => {
            const expected = "ab";
            const actual = caesar("yz", 2);
            expect(actual).to.equal(expected);
        });
    });
    describe("Encoding Normal cases", () => {
        it("should return 'fgh' for letters 'abc' and shift ammount 5 ", () => {
            const expected = "fgh";
            const actual = caesar("abc", 5);
            expect(actual).to.equal(expected);
        });
        it("should return 'abc' for letters 'fgh' and shift ammount -5 ", () => {
            const expected = "abc";
            const actual = caesar("fgh", -5);
            expect(actual).to.equal(expected);
        });
        it("should return 'cklpn' for letters 'jrswu' and shift ammount -7", () => {
            const expected = "cklpn";
            const actual = caesar("jrswu", -7);
            expect(actual).to.equal(expected);
        });
        it("should return 'fgh' for letters 'ABC' and shift ammount 5 ", () => {
            const expected = "fgh";
            const actual = caesar("ABC", 5);
            expect(actual).to.equal(expected);
        });
        it("should return 'f g.h' for letters 'a b.c' and shift ammount 5 ", () => {
            const expected = "fgh";
            const actual = caesar("abc", 5);
            expect(actual).to.equal(expected);
        });
    });
    describe("Encoding error cases", () => {
        it("should return false for shift ammount 0", () => { 
            expect(caesar("abc", 0)).to.be.false;
        });
        it("should return false for shift ammount < -25", () => { 
            expect(caesar("abc", -26)).to.be.false;
        });
        it("should return false for shift ammount < -25", () => { 
            expect(caesar("abc", -9016)).to.be.false;
        });
        it("should return false for shift ammount > 25", () => { 
            expect(caesar("abc", 26)).to.be.false;
        });
        it("should return false for shift ammount < 25", () => { 
            expect(caesar("abc", 713)).to.be.false;
        });
    });
});
