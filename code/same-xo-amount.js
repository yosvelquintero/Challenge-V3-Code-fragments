/**
 *  Check if the amount of X and O in a string is the same
 * 
 * @param {String} str String
 * @returns {Boolean} True or false
 */
function sameXOAmount(str) {
	let letterCount = l => (str.match(new RegExp(l, 'gi')) || []).length;

	return letterCount('x') === letterCount('o');
}

module.exports = sameXOAmount;
