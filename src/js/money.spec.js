import { describe, expect, it } from "vitest";
import Dallor from "./dollar.js";

describe("money Test", () => {
  it.todo("$5+ 10CHF=$10 (환율이 2:1일 경우)");

  it("$5 * 2 = $10", () => {
    const five = new Dallor(5);

    expect(five.times(2)).toEqual(new Dallor(10));
  });

  it.todo("amount를 private로 만들기");
  it("dollar 부작용 : 연산을 수행한 후에 dollar의 값이 바뀌지 않는다", () => {
    const five = new Dallor(5);
    expect(five.times(2)).toEqual(new Dallor(10));
    expect(five.times(3)).toEqual(new Dallor(15));
  });

  it.todo("money 반올림");

  describe("equals() ?", () => {
    it("dallar 5 === dallar 5", () => {
      expect(new Dallor(5).equals(new Dallor(5))).toBeTruthy();
    });
    it("dallar 5 !== dallar 6", () => {
      expect(new Dallor(5).equals(new Dallor(6))).toBeFalsy();
    });
  });

  it.todo("hashCode() ?");

  it.todo("equal null() ?");

  it.todo("equal object() ?");
});
