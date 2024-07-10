import { Bank } from "./bank";
import { Sum } from "./expression";
import { Money } from "./money";

describe("money test", () => {
  it("currency test", () => {
    expect("USD", Money.dollar(1).currency());
    expect("CHF", Money.franc(1).currency());
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
    const five = Money.dollar(5);
    const sum = five.plus(five);
    const bank = new Bank();

    const reduced = bank.reduce(sum, "USD");

    expect(reduced).toEqual(Money.dollar(10));
  });

  it("plus는 sum을 return해야 한다", () => {
    const five = Money.dollar(5);
    const sum = five.plus(five);
    expect(sum.augend).toEqual(Money.dollar(5));
    expect(sum.addend).toEqual(Money.dollar(5));
  });

  it("reduce sum 테스트", () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4));
    const bank = new Bank();
    const result = bank.reduce(sum, "USD");
    expect(result).toEqual(Money.dollar(7));
  });

  it("bank reduce함수로 money 객체를 넘겼을 때 테스트", () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(result).toEqual(Money.dollar(1));
  });
});
