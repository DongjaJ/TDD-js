export default class Franc {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  times(multiplier) {
    return new Franc(this.#amount * multiplier);
  }

  equals(object) {
    return this.#amount === object.#amount;
  }
}
