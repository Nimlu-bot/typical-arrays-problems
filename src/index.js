
exports.min = function min(array) {
	if (Array.isArray(array) && array.length > 0) {
		return array.reduce((a, b) => Math.min(a, b));
		//return Math.min(...array);
	}
	else return 0;

}

exports.max = function max(array) {
	if (Array.isArray(array) && array.length > 0) {
		return array.reduce((a, b) => Math.max(a, b));
		//return Math.max(...array);
	}
	else return 0;
}

exports.avg = function avg(array) {
	if (Array.isArray(array) && array.length > 0) {
		return array.reduce((a, b) => a + b) / array.length;
	}
	else return 0;
}
