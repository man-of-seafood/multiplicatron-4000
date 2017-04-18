const multiply = function (factor1, factor2) {
	if(Number.isNaN(factor1) || Number.isNaN(factor2)) {
		return NaN;
	} else {
		return factor1 * factor2;
	}
}

module.exports = multiply;