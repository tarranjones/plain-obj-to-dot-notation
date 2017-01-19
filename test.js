import test from 'ava';
import m from './';

test(t => {
	t.deepEqual(m({}), {});
	t.deepEqual(m({foo: []}), {foo: []});
	t.deepEqual(m({foo: ['a', 'b']}), {foo: ['a', 'b']});
	t.deepEqual(m({foo: {bar: ['a', 'b']}}), {'foo.bar': ['a', 'b']});
	t.deepEqual(m({foo: {bar: ['a', {foo: ['b']}]}}), {'foo.bar': ['a', {foo: ['b']}]});
});
