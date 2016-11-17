function areaOfQuad(side1, side2, side3, side4) {
    if (side2 == undefined && side3 === undefined && side4 === undefined) {
        side2 = side3 = side1;
        return side1 * side2;
    }
    else if (side3 === undefined && side4 === undefined) {
        side3 = side1;
        side4 = side2;
        return side1 * side2;
    }
    return -1;
}
areaOfQuad(1);
areaOfQuad(1, 2);
areaOfQuad(1, 2, 3, 4);
