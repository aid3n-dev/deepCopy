const deepCopy = require("../src/deepCopy.js");

describe("deepCopy function", () => {
  test("copies a simple array", () => {
    const originalObj = [1, 2, 3];
    const copiedObj = deepCopy(originalObj);
    expect(copiedObj).toEqual(originalObj);
    expect(copiedObj).not.toBe(originalObj);
  });

  test("copies a nested array", () => {
    const originalObj = [1, [2, 3]];
    const copiedObj = deepCopy(originalObj);
    expect(copiedObj).toEqual(originalObj);
    expect(copiedObj).not.toBe(originalObj);
    expect(copiedObj[1]).not.toBe(originalObj[1]);
  });

  test("copies a simple object", () => {
    const originalObj = { a: 1, b: 2, c: 3 };
    const copiedObj = deepCopy(originalObj);
    expect(copiedObj).toEqual(originalObj);
    expect(copiedObj).not.toBe(originalObj);
  });

  test("copies a nested object", () => {
    const originalObj = { a: 1, b: { c: 2, d: 3 } };
    const copiedObj = deepCopy(originalObj);
    expect(copiedObj).toEqual(originalObj);
    expect(copiedObj).not.toBe(originalObj);
    expect(copiedObj.b).not.toBe(originalObj.b);
  });
});
