import { describe, expect } from "vitest";
import Dallor from "./dollar.js";

describe("money Test", () => {
  const five = new Dallor(5);
  five.times(2);
  expect(five.amount).toBe(10);
});
