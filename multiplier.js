const multiply = function (arrNums) {
	const product = arrNums.reduce((acc, curr) => acc * curr);
	return product;
}

module.exports = multiply;
