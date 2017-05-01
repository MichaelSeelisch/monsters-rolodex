// @ts-check
/**
 * @param {string} input
 */
function foo(input) {
    input.toLowerCase();
    //    ~~~~~~~~~~~ Error! Should be toLowerCase
    var myES6Var = 'test';
}
