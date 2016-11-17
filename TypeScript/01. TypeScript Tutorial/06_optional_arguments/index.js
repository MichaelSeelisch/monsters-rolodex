function areaOfSquare(side, isInteger) {
    if (isInteger) {
        return Math.floor(side * side);
    }
    return side * side;
}
console.log(areaOfSquare(5.25, true));
