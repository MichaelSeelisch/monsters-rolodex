import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
            t.same(result.warnings().length, 0);
        });
}

test('transitionShtct', t => {
  return run(t, 'div {property: all; duration: 1s; timing: ease-in-out; delay: 1s}', 'div {transition: all 1s, ease-in-out 1s}', {});
});

/* Write tests here

test('does something', t => {
    return run(t, 'a{ }', 'a{ }', { });
});

*/
