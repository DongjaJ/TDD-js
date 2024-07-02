import { describe, expect, it } from "vitest";
import Franc from "./franc.js";

describe("Franc Test", () => {
  it("5HCF * 2 = 10HCF", () => {
    const five = new Franc(5);

    expect(five.times(2)).toEqual(new Franc(10));
  });

  it("dollar 부작용 : 연산을 수행한 후에 dollar의 값이 바뀌지 않는다", () => {
    const five = new Franc(5);
    expect(five.times(2)).toEqual(new Franc(10));
    expect(five.times(3)).toEqual(new Franc(15));
  });

  describe("equals() ?", () => {
    it("dallar 5 === dallar 5", () => {
      expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    });
    it("dallar 5 !== dallar 6", () => {
      expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
    });
  });
});
