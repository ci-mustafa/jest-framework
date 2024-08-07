/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");
const button = require("../button")

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
})

describe("DOM Tests", () => {
    test("Expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You clicked the button!");
    });
});