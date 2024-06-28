// https://github.com/marpple/FxTS/blob/main/src/isNumber.ts

import Include from "./Include";

const isNumber = <T>(n: T): n is Include<T, number> => typeof n === "number";

export default isNumber;
