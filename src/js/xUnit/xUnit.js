import assert from "assert";

class TestCase {
  constructor(functionName) {
    this.functionName = functionName;
  }

  run() {
    this[this.functionName]();
  }
}

class WasRun extends TestCase {
  wasRun;

  constructor(functionName) {
    super(functionName);
    this.wasRun = false;
  }

  testMethod() {
    this.wasRun = true;
  }
}

class TestCaseTest extends TestCase {
  testRunning() {
    const test = new WasRun("testMethod");
    assert(!test.wasRun);
    test.run();
    assert(test.wasRun);
  }
}

new TestCaseTest("testRunning").run();
