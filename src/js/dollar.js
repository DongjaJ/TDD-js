export default class Dallor {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  times(multiplier) {
    return new Dallor(this.#amount * multiplier);
  }

  equals(object) {
    return this.#amount === object.#amount;
  }
}
