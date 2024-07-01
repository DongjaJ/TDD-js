import { describe, expect } from "vitest";

describe("money Test", () => {
  const five = new Five(5);
  five.times(2);
  expect(five.amount).toBe(10);
});
