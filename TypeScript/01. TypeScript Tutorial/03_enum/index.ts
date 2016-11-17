enum  myConstants {
  pi = 3.14,
  e = 2.73,
  log2 = 0.3,
  log5 = 0.7,
  // myStr = 'test' => ERROR!
}

console.log('Finding circumference of circle');

var radius:number = 10;

console.log(2 * myConstants.pi * radius);

// myConstants.pi = 4; => ERROR!