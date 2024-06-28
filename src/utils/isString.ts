// https://github.com/marpple/FxTS/blob/main/src/isString.ts

import Include from "./Include";

const isString = <T>(n: T): n is Include<T, number> => typeof n === "string";

export default isString;
