const multiply = require('./multiplier.js');

class TestSuite {
	runTest(testName) {
		const result = this[testName]();
		console.log(result, testName);
	}
	runTests() {
		Object.getOwnPropertyNames(Object.getPrototypeOf(this))
			.filter(prop => this[prop] instanceof Function)
			.filter(prop => prop.indexOf('test') !== -1)
			.forEach(testName => this.runTest(testName));
	}
	assertEquals(a, b) {
		return a === b;
	}
	testMultiplyPositiveNumbers() {
		return this.assertEquals(multiply(2,2), 4);
	}
	testMultiplyNegativeNumbers() {
		return this.assertEquals(multiply(-2,-2), 4);
	}
	testMultiplyMixedSignNumbers() {
		return this.assertEquals(multiply(-2,2), -4);
	}
	testMultiplyNaNAndNumber() {
		return Number.isNaN(multiply('a', 2));
	}
	testMultiplyNumberAndNaN() {
		return Number.isNaN(multiply(2, 'a'));
	}
}

const testSuite = new TestSuite();
testSuite.runTests();