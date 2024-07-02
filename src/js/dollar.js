import { Money } from "./money.js";

export default class Dallor extends Money {
  constructor(amount) {
    super();
    this._amount = amount;
  }

  times(multiplier) {
    return new Dallor(this._amount * multiplier);
  }
}
