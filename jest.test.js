const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const calculator = require("./calculator");
const ceaserCipher = require("./ceaserCipher");
const analyzeArray = require("./analyzeArray");

test("take a string and return it with a capitalized first letter", () => {
  expect(capitalize("potato")).toBe("Potato");
});

test("take a string and reverse the string", () => {
  expect(reverseString("ao")).toBe("oa");
});

test("sum", () => {
  expect(calculator(1, 2, "+")).toBe(3);
});

test("minus", () => {
  expect(calculator(3, 2, "-")).toBe(1);
});

test("divide", () => {
  expect(calculator(4, 2, ":")).toBe(2);
});

test("multiply", () => {
  expect(calculator(2, 3, "x")).toBe(6);
});

test("ceaser cipher in lower case", () => {
  expect(ceaserCipher("abc", 3)).toBe("def");
});

test("ceaser cipher in upper case", () => {
  expect(ceaserCipher("HeLLo", 3)).toBe("KhOOr");
});

test("analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
