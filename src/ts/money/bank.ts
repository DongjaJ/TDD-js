import { Expression, Sum } from "./expression";
import { Money } from "./money";

export class Bank {
  private rates = new Map();

  reduce(source: Expression, to: string) {
    return source.reduce(this, to);
  }

  rate(from: string, to: string) {
    if (from === to) {
      return 1;
    }

    const rate = this.rates.get(new Pair(from, to).toString());

    return rate;
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to).toString(), rate);
  }
}

class Pair {
  constructor(private from: string, private to: string) {}

  toString() {
    return `${this.from}-${this.to}`;
  }
}
