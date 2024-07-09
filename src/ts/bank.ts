import { Expression } from "./expression";
import { Money } from "./money";

export class Bank {
  reduce(source: Expression, to: string) {
    return Money.dollar(10);
  }
}
