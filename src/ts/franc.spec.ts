import { describe, expect, it } from "vitest";
import { Money } from "./money";

describe("Franc Test", () => {
  it("5HCF * 2 = 10HCF", () => {
    const five = Money.franc(5);

    expect(five.times(2)).toEqual(Money.franc(10));
  });

  it("franc 부작용 : 연산을 수행한 후에 franc 값이 바뀌지 않는다", () => {
    const five = Money.franc(5);
    expect(five.times(2)).toEqual(Money.franc(10));
    expect(five.times(3)).toEqual(Money.franc(15));
  });

  describe("equals() ?", () => {
    it("franc 5 === franc 5", () => {
      expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
    });
    it("franc 5 !== franc 6", () => {
      expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
    });
  });
});
