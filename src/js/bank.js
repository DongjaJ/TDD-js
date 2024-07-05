export class Bank {
  #rates = new Map();

  reduce(source, to) {
    return source.reduce(this, to);
  }

  rate(from, to) {
    if (from === to) {
      return 1;
    }

    const rate = this.#rates.get(new Pair(from, to).toString());

    return rate;
  }

  addRate(from, to, rate) {
    this.#rates.set(new Pair(from, to).toString(), rate);
  }
}

class Pair {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  toString() {
    return `${this.from}-${this.to}`;
  }
}
