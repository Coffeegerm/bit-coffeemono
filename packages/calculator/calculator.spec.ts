import { add } from "./calculator";

it("should return the correct value", () => {
  expect(add(1, 2)).toBe(3);
});
