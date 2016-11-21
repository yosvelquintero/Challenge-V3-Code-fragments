(function () {
	'use strict';

	/**
	 * Get the number which occurs an odd number of times
	 * 
	 * @param {Array} numbers Array of numbers
	 * @returns {Number} Number
	 */
	function findOddAmount(numbers) {
		let obj = {};

		return numbers.find((n) => {
			obj[n] = obj[n] && obj[n]++ || 1;

			return (1 === obj[n]) ? numbers.filter(num => n === num).length % 2 : false;
		});
	}

	module.exports = findOddAmount;
})();
