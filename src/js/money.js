export class Money {
  _amount;
  _currency;

  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  equals(object) {
    const dollar = object;
    return this._amount === dollar._amount;
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
}

export class Dollar extends Money {
  times(multiplier) {
    return Money.dollar(this._amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier) {
    return Money.franc(this._amount * multiplier);
  }
}
