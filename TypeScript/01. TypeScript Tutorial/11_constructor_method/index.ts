class NewWebsite {
  url:string;
  facebookLikes:number;

  constructor(url:string, fbLikes:number) {
    this.url = url;
    this.facebookLikes = fbLikes;
  }
}

var google = new NewWebsite('http://google.com', 12345);