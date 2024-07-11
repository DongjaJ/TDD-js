import { Money } from "./money.js";

export class Expression {
  reduce(to) {}
  plus(addend) {}
}

export class Sum extends Expression {
  augend;
  addend;

  constructor(augend, addend) {
    super();
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank, to) {
    const amount =
      this.augend.reduce(bank, to)._amount +
      this.addend.reduce(bank, to)._amount;
    return new Money(amount, to);
  }

  plus(addend) {
    return null;
  }
}
