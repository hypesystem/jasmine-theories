declare namespace jasmineTheories {
	/**
	 * Action method that should be called when the async work is complete.
	 */
	interface DoneFn extends Function {
		(): void;

		/** fails the spec and indicates that it has completed. If the message is an Error, Error.message is used */
		fail: (message?: Error | string) => void;
	}

	type ImplementationCallback = ((testedValue: any) => PromiseLike<any>) | ((testedValue: any, done: DoneFn) => void);

	interface jasmineTheoriesStatic {
		/**
		 * Runs the jasmine test function with each of the given arguments
		 * @param description the description of the test
		 * @param args argunments passed to the test
		 * @param testFunction the test
		 */
		it(description: string, args: any[], testFunction: ImplementationCallback): void;

		/**
		 * Ignored version of the "it" test (the x means excluded)
		 * @param description the description of the test
		 * @param args argunments passed to the test
		 * @param testFunction the test
		 */
		xit(description: string, args: any[], testFunction: ImplementationCallback): void;
	}
 }
 declare var jsminTheories: jasmineTheories.jasmineTheoriesStatic;
 export default jsminTheories;