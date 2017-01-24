# plain-obj-to-dot-notation
[![Build Status](https://travis-ci.org/tarranjones/plain-obj-to-dot-notation.svg?branch=master)](https://travis-ci.org/tarranjones/plain-obj-to-dot-notation)
[![NPM](https://nodei.co/npm/plain-obj-to-dot-notation.png)](https://nodei.co/npm/plain-obj-to-dot-notation/)

> Converts a plain object to dot-notation

An Array will not be converted to dot-notation


## Install

```
$ npm install --save plain-obj-to-dot-notation
```


## Usage

```js
var plainObjToDotNotation = require('plain-obj-to-dot-notation');

plainObjToDotNotation({foo: { bar : [ baz, qux ]})};
//=> 
{
	"foo.bar" : [ baz, qux ]
}


	var obj = {
		foo : {
			bar : [
				{
					a:{
						y:{ a:1},
						z:{ a:1},
					}
				},{
					b:{
						y:{ a:1},
						z:{ a:1},
					}
				}
			]
		}
	}

	plainObjToDotNotation(obj)

	=> {
		'foo.bar': [
				{
					a:{
						y:{ a:1},
						z:{ a:1},
					}
				},{
					b:{
						y:{ a:1},
						z:{ a:1},
					}
				}
			]

	}

	var recursive = true;

	plainObjToDotNotation(obj, recursive);

	=> dotnot_recursive = {
		'foo.bar': [
				{
					'a.y.a':1,
					'a.z.a':1,
				},
				{
					'b.y.a':1,
					'b.z.a':1,
				}
			]

	}


```


## Related

- [obj-to-dot-notation](https://github.com/tarranjones/obj-to-dot-notation) - Converts an object to dot-notation

## Dependency
### is-plain-obj [![Build Status](https://travis-ci.org/sindresorhus/is-plain-obj.svg?branch=master)](https://travis-ci.org/sindresorhus/is-plain-obj)
### is-obj [![Build Status](https://travis-ci.org/sindresorhus/is-obj.svg?branch=master)](https://travis-ci.org/sindresorhus/is-obj)


## License

MIT © [Tarran Jones](http://tarranjones.com)
