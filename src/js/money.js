export class Money {
  _amount;

  constructor(amount) {
    this._amount = amount;
  }

  equals(object) {
    const dollar = object;
    return this._amount === dollar._amount;
  }

  static dollar(amount) {
    return new Dollar(amount);
  }

  static franc(amount) {
    return new Franc(amount);
  }
}

export class Dollar extends Money {
  times(multiplier) {
    return new Dollar(this._amount * multiplier);
  }
}

export class Franc extends Money {
  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }
}
