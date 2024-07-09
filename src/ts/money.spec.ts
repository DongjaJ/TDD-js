import { Money } from "./money";

describe("money test", () => {
  it("currency test", () => {
    expect("USD", Money.dollar(1).currency());
    expect("CHF", Money.franc(1).currency());
  });
});
