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

  test("copies an mixed object in array", () => {
    const original = [1, [2, 3], { a: "A" }];
    const copy = deepCopy(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy[1]).not.toBe(original[1]);
    expect(copy[2]).not.toBe(original[2]);
  });

  test("copies an mixed object in object", () => {
    const original = { a: "A", b: { c: "C" }, d: [1, 2, 3] };
    const copy = deepCopy(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy.b).not.toBe(original.b);
    expect(copy.d).not.toBe(original.d);
  });

  test("copies a Date object", () => {
    const original = new Date();
    const copy = deepCopy(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });

  test("copies a RegExp object", () => {
    const original = new RegExp("ab+c", "i");
    const copy = deepCopy(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });

  test("copies a Set object", () => {
    const original = new Set([1, 2, 3]);
    const copy = deepCopy(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });

  test("copies a Map object", () => {
    const original = new Map([
      ["key1", "value1"],
      ["key2", "value2"],
    ]);
    const copy = deepCopy(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
  });
});
