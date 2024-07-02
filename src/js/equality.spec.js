import { Franc, Dollar } from "./money.js";

describe("equality Test", () => {
  it("같은 값을 생성자에 넣은 dallor 객체 테스트 ", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  });

  it("다른 값을 생성자에 넣은 dallor 객체 테스트 ", () => {
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
  });

  it("같은 값을 생성자에 넣은 Franc 객체 테스트 ", () => {
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
  });

  it("다른 값을 생성자에 넣은 Franc 객체 테스트 ", () => {
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
  });
});
