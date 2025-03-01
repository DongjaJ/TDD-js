import { Bank } from "./bank";
import { Expression, Sum } from "./expression";

export class Money implements Expression {
  constructor(public amount: number, public _currency: string) {}

  equals(object: Money) {
    const money = object;
    return (
      this.amount === money.amount && this.currency() === object.currency()
    );
  }

  static dollar(amount: number) {
    return new Money(amount, "USD");
  }

  static franc(amount: number) {
    return new Money(amount, "CHF");
  }

  currency(): string {
    return this._currency;
  }

  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this._currency);
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string) {
    const rate = bank.rate(this.currency(), to);

    return new Money(this.amount / rate, to);
  }
}
