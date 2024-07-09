export class Money {
  constructor(protected amount: number, protected _currency: string) {}

  equals(object: object) {
    const money = object as Money;
    return this.amount === money.amount;
  }

  static dollar(amount: number) {
    return new Dollar(amount, "USD");
  }

  static franc(amount: number) {
    return new Franc(amount, "CHF");
  }

  currency(): string {
    return "";
  }
}

export class Dollar extends Money {
  constructor(amount: number, _currency: string) {
    super(amount, _currency);
  }

  times(multiplier: number) {
    return Money.dollar(this.amount * multiplier);
  }

  override currency(): string {
    return this._currency;
  }
}

export class Franc extends Money {
  constructor(amount: number, _currency: string) {
    super(amount, _currency);
  }

  times(multiplier: number) {
    return Money.franc(this.amount * multiplier);
  }

  override currency(): string {
    return this._currency;
  }
}
