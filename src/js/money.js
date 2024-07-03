export class Money {
  _amount;
  _currency;

  constructor(amount, currency) {
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
    return new Dollar(amount, "USD");
  }

  static franc(amount) {
    return new Franc(amount, "CHF");
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
}

export class Dollar extends Money {}

export class Franc extends Money {}
