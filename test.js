import test from 'ava';
import m from './';


test(t => {
	t.deepEqual(m({}), {});
	t.deepEqual(m({foo: []}), {foo: []});
	t.deepEqual(m({foo: ['a', 'b']}), {foo: ['a', 'b']});
	t.deepEqual(m({foo: {bar: ['a', 'b']}}), {'foo.bar': ['a', 'b']});
	t.deepEqual(m({foo: {bar: ['a', {foo: ['b']}]}}), {'foo.bar': ['a', {foo: ['b']}]});

	//recursive true

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
	var dotnot = {
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
	var dotnot_recursive = {
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
	t.deepEqual(m(obj, true), dotnot_recursive);
	t.deepEqual(m(obj, false), dotnot);
	t.deepEqual(m(obj), dotnot);
});
