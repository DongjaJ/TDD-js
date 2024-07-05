import { Money } from "./money.js";

export class Expression {
  reduce(to) {}
}

export class Sum extends Expression {
  augend;
  addend;

  constructor(augend, addend) {
    super();
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to) {
    const amount = this.augend._amount + this.addend._amount;
    return new Money(amount, to);
  }
}
