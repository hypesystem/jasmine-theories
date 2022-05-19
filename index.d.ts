declare interface JasmineTheoriesStatic {
	/**
	 * Define a theory. A theory contains an expectation that tests that the state of the code holds for
	 * several different inputs. A spec will be created for each argument, with the value of the argument
	 * intersperced into the expectation using [`util.format`](https://nodejs.org/api/util.html#utilformatformat-args)
	 * A spec whose expectations all succeed will be passing and a spec with any failures will fail.
	 * @param expectation Textual description of what this spec is checking
	 * @param args Arguments to test the theory on
	 * @param assertion Function that contains the code of your test. If not provided the test will be pending.
	 * @param timeout Custom timeout for an async spec.
	 */
	it(
		expectation: string,
		args: any[],
		assertion?: (testedValue: any, done?: () => jasmine.ImplementationCallback) => void,
		timeout?: number,
	): void;

	/**
	 * A temporarily disabled `it`. The specs created by the theory will report as pending and will
	 * not be executed.
	 * @param expectation Textual description of what this spec is checking
	 * @param args Arguments to test the theory on
	 * @param assertion Function that contains the code of your test. If not provided the test will be pending.
	 * @param timeout Custom timeout for an async spec.
	 */
	xit(
		expectation: string,
		args: any[],
		assertion: (testedValue: any, done?: jasmine.ImplementationCallback) => void,
		timeout: number,
	): void;
}

declare const JasmineTheories: JasmineTheoriesStatic;
export default JasmineTheories;
