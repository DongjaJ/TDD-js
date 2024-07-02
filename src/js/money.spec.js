import { Money } from "./money.js";

describe("Franc Test", () => {
  it("Money 팩토리 함수", () => {
    const five = Money.dollar(5);

    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });
});
