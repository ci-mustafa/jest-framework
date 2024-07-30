const addition = require("../calc")

describe("calculator", () => {
    describe("addition function", () => {
        test("should return 50 for 25 + 25", () => {
            expect(addition(25, 25)).toBe(50);
        });
        test("should return 65 for 35 + 39", () => {
            expect(addition(35, 30)).toBe(65);
        });
        test("should return 0 for no parameter", () => {
            expect(addition()).toBe(0);
        });
        test("should return 'Parameter should be typeof integer' for string type", () => {
            expect(addition("1", "23")).toBe("Parameter should be type of integer");
        });
        test("should return 'Parameter should be typeof integer' for string type", () => {
            expect(addition("1", 1)).toBe("Parameter should be type of integer");
        });
        test("should return 'Parameter should be typeof integer' for string type", () => {
            expect(addition(23, "34")).toBe("Parameter should be type of integer");
        });
        test("should return -15 for -5 + -10 ", () => {
            expect(addition(-5, -10)).toBe(-15);
        });
        test("should return 5 for -5 + 10 ", () => {
            expect(addition(-5, 10)).toBe(5);
        });
        test("should return 5 for 10 + -5 ", () => {
            expect(addition(10, -5)).toBe(5);
        });
        test("should return 5 for 5 + no parameter", () => {
            expect(addition(5)).toBe(5);
        });
        test("should return 'Can not add null values' for null parameters", () => {
            expect(addition(5, null)).toBe("Can not add null values");
        });
        test("should return 'Can not add null values' for null parameters", () => {
            expect(addition(null, null)).toBe("Can not add null values");
        });
        test("should return 'Can not add null values' for null parameters", () => {
            expect(addition(null, 5)).toBe("Can not add null values");
        });

    });
});