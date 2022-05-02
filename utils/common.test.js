const common = require("./common");

test("Emtpy string function", () => {
  expect(common.isEmptyString("")).toBe(true);
  expect(common.isEmptyString("test")).toBe(false);
  expect(common.isEmptyString("123")).toBe(false);
  expect(common.isEmptyString(null)).toBe(false);
});
