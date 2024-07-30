const addition = require("../calc")

describe("calculator", () => {
    describe("addition function", () => {
        test("should return 50 for 25 + 25", () => {
            expect(addition(25, 25)).toBe(50);
        });

    });
});