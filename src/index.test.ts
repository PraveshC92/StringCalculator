const sum = require("./index");

test("Case1 -> input: ''", () => {
  expect(sum("")).toEqual(0);
});

test("Case2 -> input: 1", () => {
  expect(sum("1")).toEqual(1);
});

test("Case3 -> input: 1,5", () => {
  expect(sum("1,5")).toEqual(6);
});

test("Case4 -> input: `1\n2,3`", () => {
  expect(sum("1\n2,3")).toEqual(6);
});

test("Case5 -> input: `//;\n1;2`", () => {
  expect(sum("//;\n1;2")).toEqual(3);
});

test("Case6- Should return an error due to Negative Number -> input: `//;\n1;-2`", () => {
  expect(() => {
    sum("//;\n1;-2");
  }).toThrow("negative numbers not allowed -2");
});

test("Case7- Should return an error due to multiple negative numbers -> input: `//;\n1;-2;-3`", () => {
  expect(() => {
    sum("//;\n1;-2;-3");
  }).toThrow(
    "negative numbers not allowed, multiple negative numbers found -2,-3"
  );
});

test("Case8 -> Number bigger than 1000 should be ignored  input: `2,1001`", () => {
  expect(sum("2,1001")).toEqual(2);
});
