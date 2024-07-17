import assert from "assert";

/**
 * TODO
 *
 * 1. setUp에서 발생한 에러 찾아서 보고하기
 * 2. TestCase 클래스에서 TestSuite 생성하기
 * 3. 테스트 메서드가 실패하더라도 tearDown 호출하기
 *
 * */

class TestCase {
  constructor(functionName) {
    this.functionName = functionName;
  }

  run(result) {
    result.testStarted();
    this.setUp();

    try {
      this[this.functionName]();
    } catch (error) {
      result.testFailed();
    }

    this.tearDown();
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
    this.result = new TestResult();
  }

  testSetUp() {
    const test = new WasRun("testSetUp");
    test.run(this.result);
    assert.equal(test.log, "setup testMethod");
  }

  testTemplateMethod() {
    const test = new WasRun("testMethod");
    test.run(this.result);
    assert.equal("setup testMethod tearDown", test.log);
  }

  testResult() {
    const test = new WasRun("testMethod");
    test.run(this.result);
    assert.equal(this.result.summary(), "1 run, 0 failed");
  }

  testFailedResult() {
    const test = new WasRun("testBrokenMethod");
    test.run(this.result);
    assert.equal(this.result.summary(), "1 run, 1 failed");
  }

  testFailedResultFormatting() {
    this.result.testStarted();
    this.result.testFailed();
    assert.equal("1 run, 1 failed", this.result.summary());
  }

  testSuite() {
    const suite = new TestSuite();
    suite.add(new WasRun("testMethod"));
    suite.add(new WasRun("testBrokenMethod"));

    suite.run(this.result);

    assert.equal(this.result.summary(), "2 run, 1 failed");
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

class TestSuite {
  constructor() {
    this.testList = [];
  }

  add(test) {
    this.testList.push(test);
  }

  run(result) {
    this.testList.forEach((test) => test.run(result));
  }
}

const suite = new TestSuite();

suite.add(new TestCaseTest("testTemplateMethod"));
suite.add(new TestCaseTest("testResult"));
suite.add(new TestCaseTest("testFailedResultFormatting"));
suite.add(new TestCaseTest("testFailedResult"));
suite.add(new TestCaseTest("testSuite"));

const result = new TestResult();
suite.run(result);
console.log(result.summary());
