var NewWebsite = (function () {
    function NewWebsite(url, fbLikes) {
        this.url = url;
        this.facebookLikes = fbLikes;
    }
    return NewWebsite;
}());
var google = new NewWebsite('http://google.com', 12345);
