export default class Dallor {
  amount;

  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    this.amount = this.amount * multiplier;
    return null;
  }
}
