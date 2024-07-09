import { describe, expect, it } from "vitest";
import { Money } from "./money.js";
import { Bank } from "./bank.js";
import { Sum } from "./expression.js";

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

  it("간단한 달러 덧셈 테스트", () => {
    const sum = new Sum(Money.dollar(5), Money.dollar(5));

    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD");
    expect(reduced).toEqual(Money.dollar(10));
  });

  it("Bank.reduce()의 인자로 Money를 넘겼을 경우 동작 테스트", () => {
    const bank = new Bank();
    const reduced = bank.reduce(Money.dollar(1), "USD");
    expect(reduced).toEqual(Money.dollar(1));
  });

  it("Money에 대한 통화 변환을 수행하는 reduce 동작 테스트", () => {
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    const result = bank.reduce(Money.franc(2), "USD");
    expect(result).toEqual(Money.dollar(1));
  });

  it("USD에서 USD로의 환율은 1 테스트", () => {
    const result = new Bank().rate("USD", "USD");
    expect(result).toEqual(1);
  });

  it("다른 통화들간의 덧셈", () => {
    const fiveBucks = Money.dollar(5);
    const tenFranc = Money.franc(10);
    const bank = new Bank();
    bank.addRate("CHF", "USD", 2);

    const result = bank.reduce(fiveBucks.plus(tenFranc), "USD");

    expect(result).toEqual(Money.dollar(10));
  });
});
