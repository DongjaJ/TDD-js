import { Bank } from "./bank";
import { Money } from "./money";
export interface Expression {
  reduce: (bank: Bank, to: string) => Money;
}

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  reduce(bank: Bank, to: string) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
