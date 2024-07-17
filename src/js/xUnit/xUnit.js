import assert from "assert";

class TestCase {
  constructor(functionName) {
    this.functionName = functionName;
  }

  run() {
    const result = new TestResult();
    result.testStarted();
    this.setUp();

    try {
      this[this.functionName]();
    } catch (error) {
      result.testFailed();
    }

    this.tearDown();
    return result;
  }

  setUp() {}

  tearDown() {}
}

class WasRun extends TestCase {
  wasRun;
  wasSetUp;

  testMethod() {
    this.wasRun = true;
    this.log = [this.log, "testMethod"].join(" ");
  }

  setUp() {
    this.wasRun = false;
    this.wasSetUp = true;
    this.log = "setup";
  }

  tearDown() {
    this.log = [this.log, "tearDown"].join(" ");
  }

  testBrokenMethod() {
    throw new Error();
  }
}

class TestCaseTest extends TestCase {
  setUp() {
    this.test = new WasRun("testMethod");
  }

  testSetUp() {
    this.test.run();
    assert.equal(this.test.log, "setup testMethod");
  }

  testTemplateMethod() {
    const test = new WasRun("testMethod");
    test.run();
    assert.equal("setUp testMethod tearDown", test.log);
  }

  testResult() {
    const test = new WasRun("testMethod");
    const result = test.run();
    assert.equal(result.summary(), "1 run, 0 failed");
  }

  testFailedResult() {
    const test = new WasRun("testBrokenMethod");
    const result = test.run();
    assert.equal(result.summary(), "1 run, 1 failed");
  }

  testFailedResultFormatting() {
    const result = new TestResult();
    result.testStarted();
    result.testFailed();
    assert.equal("1 run, 1 failed", result.summary());
  }
}

class TestResult {
  constructor() {
    this.runCount = 0;
    this.failureCount = 0;
  }

  testStarted() {
    this.runCount = this.runCount + 1;
  }

  summary() {
    return `${this.runCount} run, ${this.failureCount} failed`;
  }

  testFailed() {
    this.failureCount = this.failureCount + 1;
  }
}

new TestCaseTest("testTemplateMethod").run().summary();
new TestCaseTest("testResult").run().summary();
new TestCaseTest("testFailedResultFormatting").run().summary();
new TestCaseTest("testFailedResult").run().summary();
