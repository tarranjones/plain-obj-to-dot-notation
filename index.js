'use strict';
var isPlainObj = require('is-plain-obj');

module.exports = function (obj) {
	var plainObjToDotNotation = function (obj, result, dotPathArr) {
		result = result || {};
		dotPathArr = dotPathArr || [];
		Object.keys(obj).forEach(function (key) {
			var val = obj[key];
			if (isPlainObj(val)) {
				return plainObjToDotNotation(val, result, dotPathArr.concat(key));
			}
			result[dotPathArr.concat(key).join('.')] = val;
		});
		return result;
	};
	return plainObjToDotNotation(obj);
};
