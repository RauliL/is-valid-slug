import { isValidSlug } from "./index";

describe("isValidSlug()", () => {
  it.each([
    ["1", true],
    ["john", true],
    ["6f5b9d77-7918-4112-bd89-5c7698d9e7e6", true],

    [undefined, false],
    ["foo;bar", false],
    ["/etc/passwd", false],
    ["@foo", false],
  ])("should detect valid slugs", (input, expectedResult) => {
    expect(isValidSlug(input)).toBe(expectedResult);
  });
});
