import { describe, test, assert } from "vitest";
import { sum } from "./sum.mjs";

describe("sum", () => {
  test("1+2", () => {
    assert.equal(sum(1, 2), 3);
  });
});
