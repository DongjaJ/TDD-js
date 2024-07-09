export class Money {
  constructor(protected amount: number, protected _currency: string) {}

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

  times(multiplier: number) {
    return new Money(this.amount * multiplier, this._currency);
  }
}
