interface operateInterface {
  shape:string;
  side?:number;
}

// function operate(x:{shape:string, side:number}) {
function operate(x:operateInterface) {
  return x.side * x.side;
}

var calc = operate({
  shape: "square",
  side:5
});