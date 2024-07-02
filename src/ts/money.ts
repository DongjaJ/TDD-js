export class Money {
  constructor(protected amount: number) {}

  equals(object: object) {
    const money = object as Money;
    return this.amount === money.amount;
  }

  static dollar(amount: number) {
    return new Dollar(amount);
  }

  static franc(amount: number) {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  times(multiplier: number) {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier: number) {
    return new Franc(this.amount * multiplier);
  }
}
