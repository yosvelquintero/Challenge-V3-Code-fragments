describe('sameXOAmount()', () => {
	'use strict';

	let sameXOAmount = require('../../code/same-xo-amount');

	it('should return `true` if number of `X` and `O` is equal', () => {
		expect(sameXOAmount('xXoO')).toEqual(true);
		expect(sameXOAmount('aAxXXbBoOo')).toEqual(true);
		expect(sameXOAmount('abc')).toEqual(true);
	});

	it('should return `false` if number of `X` and `O` is not equal', () => {
		expect(sameXOAmount('OaAxXbBoO')).toEqual(false);
		expect(sameXOAmount('xgXoXsdxOxz')).toEqual(false);
		expect(sameXOAmount('aaAmmMxMM')).toEqual(false);
	});

});
