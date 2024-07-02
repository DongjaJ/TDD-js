import { Money } from "./money.js";

describe("equality Test", () => {
  it("같은 값을 생성자에 넣은 dallor 객체 테스트 ", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  });

  it("다른 값을 생성자에 넣은 dallor 객체 테스트 ", () => {
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  });

  it("같은 값을 생성자에 넣은 Franc 객체 테스트 ", () => {
    expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
  });

  it("다른 값을 생성자에 넣은 Franc 객체 테스트 ", () => {
    expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
  });
});
