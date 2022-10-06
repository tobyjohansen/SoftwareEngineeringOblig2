const isLeapYear = require("../app.js");

const chai = require("chai");
const assert = chai.assert;

describe("The year is a leap year if", () => {
  describe("Year is divisible by 4", () => {
    it("Test 1 - Year 2000 is divisible by 4", () => {
      assert.equal(2000 % 4, 0);
      assert.equal(isLeapYear.isLeapYear(2000), true);
    });
    it("Test 2 - Year 1848 is divisible by 4", () => {
      assert.equal(1848 % 4, 0);
      assert.equal(isLeapYear.isLeapYear(1848), true);
    });
    it("Test 3 - Year 1604 is divisible by 4", () => {
      assert.equal(1604 % 4, 0);
      assert.equal(isLeapYear.isLeapYear(1604), true);
    });
  });
  describe("Year is divisible with 4, but not with 100", () => {
    it("Test 1 - Year 2064 is divisible by 4, but not with 100", () => {
      assert.equal(2064 % 4, 0);
      assert.notEqual(2064 % 100, 0);
      assert.equal(isLeapYear.isLeapYear(2064), true);
    });
    it("Test 2 - Year 116 is divisible by 4, but not with 100", () => {
      assert.equal(116 % 4, 0);
      assert.notEqual(116 % 100, 0);
      assert.equal(isLeapYear.isLeapYear(116), true);
    });
    it("Test 3 - Year 4964 is divisible by 4, but not with 100", () => {
      assert.equal(4964 % 4, 0);
      assert.notEqual(4964 % 100, 0);
      assert.equal(isLeapYear.isLeapYear(4964), true);
    });
  });
  describe("Year is divisible by 400", () => {
    it("Test 1 - Year 2000 is divisible by 400", () => {
      assert.equal(2000 % 400, 0);
      assert.equal(isLeapYear.isLeapYear(2000), true);
    });
    it("Test 2 - Year 1600 is divisible by 400", () => {
      assert.equal(1600 % 400, 0);
      assert.equal(isLeapYear.isLeapYear(1600), true);
    });
    it("Test 3 - Year 2400 is divisible by 400", () => {
      assert.equal(2400 % 400, 0);
      assert.equal(isLeapYear.isLeapYear(2400), true);
    });
  });
});
describe("The year is not a leap year if", () => {
  describe("Year is not divisible by 4", () => {
    it("Test 1 - Year 2001 is not divisible by 4", () => {
      assert.notEqual(2001 % 4, 0);
      assert.equal(isLeapYear.isLeapYear(2001), false);
    });
    it("Test 2 - Year 1693 is not divisible by 4", () => {
      assert.notEqual(1693 % 4, 0);
      assert.equal(isLeapYear.isLeapYear(1693), false);
    });
    it("Test 3 - Year 1 is not divisible by 4", () => {
      assert.notEqual(1 % 4, 0);
      assert.equal(isLeapYear.isLeapYear(1), false);
    });
  });

  describe("Year is divisible by 100, but not with 400", () => {
    it("Test 1 - Year 1700 is divisible by 100, but not with 400", () => {
      assert.equal(1700 % 100, 0);
      assert.notEqual(1700 % 400, 0);
      assert.equal(isLeapYear.isLeapYear(1700), false);
    });
    it("Test 2 - Year 2300 is divisible by 100, but not with 400", () => {
      assert.equal(2300 % 100, 0);
      assert.notEqual(2300 % 400, 0);
      assert.equal(isLeapYear.isLeapYear(2300), false);
    });
    it("Test 3 - Year 200 is divisible by 100, but not with 400", () => {
      assert.equal(200 % 100, 0);
      assert.notEqual(200 % 400, 0);
      assert.equal(isLeapYear.isLeapYear(200), false);
    });
  });
});
