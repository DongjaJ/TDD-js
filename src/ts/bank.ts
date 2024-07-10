import { Expression, Sum } from "./expression";
import { Money } from "./money";

export class Bank {
  reduce(source: Expression, to: string) {
    return source.reduce(to);
  }
}
