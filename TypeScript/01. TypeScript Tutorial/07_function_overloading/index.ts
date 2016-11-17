function areaOfQuad(side1:number);
function areaOfQuad(side1:number, side2:number);
function areaOfQuad(side1:number, side2:number, side3:number, side4:number);
function areaOfQuad(side1:number, side2?:number, side3?:number, side4?:number) {
  
  if(side2 == undefined && side3 === undefined && side4 === undefined) {
    side2 = side3 = side1;
    return side1 * side2;
  }

  else if(side3 === undefined && side4 === undefined) {
    side3 = side1;
    side4 = side2;
    return side1 * side2;
  }

  return -1;
}


areaOfQuad(1); // square

areaOfQuad(1, 2) // rectangle

areaOfQuad(1, 2, 3, 4) // trapezium