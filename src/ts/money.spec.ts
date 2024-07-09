import { Bank } from "./bank";
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
});
