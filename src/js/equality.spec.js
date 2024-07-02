import Dallor from "./dollar.js";
import Franc from "./franc.js";

describe("equality Test", () => {
  it("같은 값을 생성자에 넣은 dallor 객체 테스트 ", () => {
    expect(new Dallor(5).equals(new Dallor(5))).toBeTruthy();
  });

  it("다른 값을 생성자에 넣은 dallor 객체 테스트 ", () => {
    expect(new Dallor(5).equals(new Dallor(6))).toBeFalsy();
  });

  it("같은 값을 생성자에 넣은 Franc 객체 테스트 ", () => {
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
  });

  it("다른 값을 생성자에 넣은 Franc 객체 테스트 ", () => {
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
  });
});
