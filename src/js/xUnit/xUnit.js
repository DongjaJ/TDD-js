import assert from "assert";

class TestCase {
  constructor(functionName) {
    this.functionName = functionName;
  }

  run() {
    this.setUp();
    this[this.functionName]();
  }

  setUp() {}
}

class WasRun extends TestCase {
  wasRun;
  wasSetUp;

  constructor(functionName) {
    super(functionName);
  }

  testMethod() {
    this.wasRun = true;
  }

  setUp() {
    this.wasRun = false;
    this.wasSetUp = true;
  }
}

class TestCaseTest extends TestCase {
  setUp() {
    this.test = new WasRun("testMethod");
  }

  testRunning() {
    this.test.run();
    assert(this.test.wasRun);
  }

  testSetUp() {
    this.test.run();
    assert(this.test.wasSetUp);
  }
}

new TestCaseTest("testRunning").run();
new TestCaseTest("testSetUp").run();
