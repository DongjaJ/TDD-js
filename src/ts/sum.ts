import isNumber from "../utils/isNumber";
import isString from "../utils/isString";

export function sum(a: number | string, b: number | string) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }

  if (isString(a) && isString(b)) {
    return a + b;
  }

  throw new TypeError("'a' or 'b' must be type of number or string");
}
