'use strict';
var isPlainObj = require('is-plain-obj');
var isObj = require('is-obj');
module.exports = function (obj, recursive) {

	recursive = typeof recursive == "boolean" ? recursive :  false;
	var plainObjToDotNotation = function (obj, result, dotPathArr, recursive) {
		Object.keys(obj).forEach(function (key) {
			var val = obj[key];
			if (isPlainObj(val)) {
				return plainObjToDotNotation(val, result, dotPathArr.concat(key), recursive);

			} else if (recursive && isObj(val)) {

				result[dotPathArr.concat(key).join('.')] = [];

				val.forEach(function(k){

					result[dotPathArr.concat(key).join('.')].push( plainObjToDotNotation(k, {}, [], true));
				})

			} else {
				result[dotPathArr.concat(key).join('.')] = val;
			}
		});
		return result;
	};
	return plainObjToDotNotation(obj,{},[],recursive);
};
