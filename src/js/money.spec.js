import { expect } from "vitest";
import { Money } from "./money.js";

describe("Money Test", () => {
  it("Money 팩토리 함수", () => {
    const five = Money.dollar(5);

    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  describe("equality Test", () => {
    it("같은 값을 넣은 dallor 팩토리함수 테스트 ", () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    });

    it("다른 값을 넣은 dallor 팩토리함수 테스트 ", () => {
      expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    });

    it("같은 값을 넣은 dallor, franc 팩토리함수 테스트 ", () => {
      expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
    });
  });
});
