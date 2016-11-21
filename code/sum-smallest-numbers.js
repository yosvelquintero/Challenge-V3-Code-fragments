(function () {
	'use strict';

	/**
	 * Sum of the two smallest numbers from array
	 * 
	 * @param {Array} numbers Array of numbers
	 * @returns {Number} Sum result
	 */
	function sumSmallestNumbers(numbers) {
		(numbers.length > 2) && numbers.sort((a, b) => a - b);

		return numbers[0] + numbers[1];
	}

	module.exports = sumSmallestNumbers;
})();
