(function () {
	'use strict';

	/**
	 * Get the number which occurs an odd number of times
	 * 
	 * @param {Array} numbers Array of numbers
	 * @returns {Number} Number
	 */
	function findOddAmount(numbers) {
		return numbers.reduce((p, n) => p ^ n);
	}

	module.exports = findOddAmount;
})();
