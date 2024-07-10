import { Bank } from "./bank";
import { Money } from "./money";
export interface Expression {
  reduce: (bank: Bank, to: string) => Money;
  plus: (addend: Expression) => Expression;
}

export class Sum implements Expression {
  constructor(public augend: Expression, public addend: Expression) {}

  reduce(bank: Bank, to: string) {
    const amount =
      this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
    return new Money(amount, to);
  }

  plus(addend: Expression) {
    return null;
  }
}
