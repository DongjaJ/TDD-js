import { Dollar } from "./money.js";

describe("Dollar Test", () => {
  it("$5 * 2 = $10", () => {
    const five = new Dollar(5);

    expect(five.times(2)).toEqual(new Dollar(10));
  });

  it("dollar 부작용 : 연산을 수행한 후에 dollar의 값이 바뀌지 않는다", () => {
    const five = new Dollar(5);
    expect(five.times(2)).toEqual(new Dollar(10));
    expect(five.times(3)).toEqual(new Dollar(15));
  });

  describe("equals() ?", () => {
    it("dallar 5 === dallar 5", () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    });
    it("dallar 5 !== dallar 6", () => {
      expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    });
  });
});
