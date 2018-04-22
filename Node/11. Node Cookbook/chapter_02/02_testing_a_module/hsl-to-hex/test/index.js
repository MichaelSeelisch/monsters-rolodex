const hsl = require('../');
const test = require('tap').test;

test('pure white', function (assert) {
    let expected = '#ffffff';
    let actual = hsl(0, 100, 100);
    let it = 'max saturation and luminosity should return pure white';
    assert.is(actual, expected, it);
    assert.end();
});

 test('medium gray', function (assert) {
    let expected = '#808080';
    let actual = hsl(0, 0, 50);
    let it = '0% saturation, 50% luminosity should be medium gray';
    assert.is(actual, expected, it);
    assert.end();
 });

 test('hue - red', function (assert) {
    let expected = '#ff0000';
    let actual = hsl(0, 100, 50);
    let it = '0deg should be red';
    assert.is(actual, expected, it);
    assert.end();
 });

 test('hue - blue', function (assert) {
    let expected = '#0000ff';
    let actual = hsl(240, 100, 50);
    let it = '240deg should be blue';
    assert.is(actual, expected, it);
    assert.end();
 });

 test('hue - cyan', function (assert) {
    let expected = '#00ffff';
    let actual = hsl(180, 100, 50);
    let it = '180deg should be cyan';
    assert.is(actual, expected, it);
    assert.end();
 });

 test('degree overflow', function (assert) {
    let expected = hsl(1, 100, 50);
    let actual = hsl(361, 100, 50);
    let it = '361deg should be the same as 1deg';
    assert.is(actual, expected, it);
    assert.end();
 });

 test('degree underflow', function (assert) {
    let expected = hsl(-1, 100, 50);
    let actual = hsl(359, 100, 50);
    let it = '-1deg should be the same as 359deg';
    assert.is(actual, expected, it);
    assert.end();
 });

 test('max constraint', function (assert) {
    let expected = hsl(0, -1, 50);
    let actual = hsl(0, 0, 50);
    let it = '-1% should be the same as 0%';
    assert.is(actual, expected, it);
    assert.end();
 });
