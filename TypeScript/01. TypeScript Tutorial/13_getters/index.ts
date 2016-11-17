class rectangle {
  l1:number;
  l2:number;

  constructor(l1:number, l2:number) {
    this.l1 = l1;
    this.l2 = l2;
  }

  get area():number {
    return this.l1 * this.l2;
  }
}

var myRect = new rectangle(10, 20);

console.log(myRect.area);