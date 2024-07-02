import { Money } from "./money.js";

export default class Franc extends Money {
  constructor(amount) {
    super();
    this._amount = amount;
  }

  times(multiplier) {
    return new Franc(this._amount * multiplier);
  }
}
