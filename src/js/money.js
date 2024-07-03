import { Expression } from "./expression";

export class Money extends Expression {
  _amount;
  _currency;

  constructor(amount, currency) {
    super();
    this._amount = amount;
    this._currency = currency;
  }

  equals(object) {
    const money = object;
    return (
      this._amount === money._amount && this.currency() === money.currency()
    );
  }

  static dollar(amount) {
    return new Money(amount, "USD");
  }

  static franc(amount) {
    return new Money(amount, "CHF");
  }

  currency() {
    return this._currency;
  }

  toString() {
    return this._amount + " " + this._currency;
  }

  times(multiplier) {
    return new Money(this._amount * multiplier, this._currency);
  }

  plus(addend) {
    return new Money(this._amount + addend._amount, this._currency);
  }
}
