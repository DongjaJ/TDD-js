export class Money {
  _amount;

  equals(object) {
    const dollar = object;
    return this._amount === dollar._amount;
  }
}
