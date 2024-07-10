import { Money } from "./money";
export interface Expression {
  reduce: (to: string) => Money;
}

export class Sum implements Expression {
  constructor(public augend: Money, public addend: Money) {}

  reduce(to: string) {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
