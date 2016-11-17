class website {
  url:string;
  facebookLikes:number;

  constructor(url:string, fbLikes:number) {
    this.url = url;
    this.facebookLikes = fbLikes;
  }

  likesInk():string {
    return (this.facebookLikes / 1000) + 'K';
  }
}

var newWeb = new website('http://google.com', 12345);

console.log(newWeb.likesInk());