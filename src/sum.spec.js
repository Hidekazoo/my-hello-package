import { describe, test, assert } from "vitest";
import { sum } from "./sum.mjs";

describe("sum", () => {
  test("1+2 = 3", () => {
    assert.equal(sum(1, 2), 3);
  });

  test("failed test 1+3", () => {
    assert.equal(sum(1, 3), 3);
  });
});
