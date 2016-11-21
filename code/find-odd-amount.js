(function () {
	'use strict';

	/**
	 * Get the number which occurs an odd number of times
	 * 
	 * @param {Array} numbers Array of numbers
	 * @returns {Number} Number
	 */
	function findOddAmount(numbers) {
		let xor = (p, n) => p ^ n;		

		return numbers.reduce(xor);
	}

	module.exports = findOddAmount;
})();
