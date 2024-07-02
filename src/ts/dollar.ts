import { Money } from "./money";

export default class Dallor extends Money {
  constructor(amount: number) {
    super(amount);
  }

  times(multiplier: number) {
    return new Dallor(this.amount * multiplier);
  }
}
