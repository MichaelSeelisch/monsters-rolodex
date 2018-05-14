let toRGB = require('hsl-to-rgb-for-reals');
let debug = require('debug')('hsl-to-hex');

function max (val, n) {
    debug('ensuring ' + val + 'is no more than ' + n);

    return (val > n) ? n : val
};

function min (val, n) {
    debug('ensuring ' + val + 'is no less than ' + n);

    return (val < n) ? n : val
}
 
function cycle (val) {
    debug('resolving ' + val + ' within the 0-359 range');

    // For safety:
    val = max(val, 1e7)
    val = min(val, -1e7)
    
    // Cycle value:
    while (val < 0) { val += 360 }
    while (val > 359) { val -= 360 }
    
    return val
}; 

// Now for the main piece, the hsl function:
function hsl (hue, saturation, luminosity) {
    // Resolve degrees to 0 - 359 range
    hue = cycle(hue)
 
    // Enforce constraints
    saturation = min(max(saturation, 100), 0)
    luminosity = min(max(luminosity, 100), 0)
 
    // Convert to 0 to 1 range used by hsl-to-rgb-for-reals
    saturation /= 100
    luminosity /= 100
 
    // Let hsl-to-rgb-for-reals do the hard work
    var rgb = toRGB(hue, saturation, luminosity)
 
    // Convert each value in the returned RGB array
    // to a 2 character hex value, join the array into
    // a string, prefixed with a hash
    return '#' + rgb
        .map(function (n) {
            return (256 + n).toString(16).substr(-2)
        })
        .join('')
};

module.exports = hsl;
