describe('sumSmallestNumbers()', () => {
	'use strict';
	
	const sumSmallestNumbers = require('../../code/sum-smallest-numbers');

	it('should return the sum of the two smallest numbers', () => {
		expect(sumSmallestNumbers([1, 2, 3, 4])).toEqual(3);
		expect(sumSmallestNumbers([6, 7, 56, 2, 9, 34, 3])).toEqual(5);
		expect(sumSmallestNumbers([4, 4])).toEqual(8);
		expect(sumSmallestNumbers([5, 38, 15, 1, 1, -19, 9])).toEqual(-18);
		expect(sumSmallestNumbers([1, 1, 1, 1])).toEqual(2);
	});

});
