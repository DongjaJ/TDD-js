import { Money } from "./money";

describe("dallor Test", () => {
  it("$5 * 2 = $10", () => {
    const five = Money.dollar(5);

    expect(five.times(2)).toEqual(Money.dollar(10));
  });

  it("dollar 부작용 : 연산을 수행한 후에 dollar의 값이 바뀌지 않는다", () => {
    const five = Money.dollar(5);
    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  describe("equals() ?", () => {
    it("dallar 5 === dallar 5", () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    });
    it("dallar 5 !== dallar 6", () => {
      expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    });
  });
});
