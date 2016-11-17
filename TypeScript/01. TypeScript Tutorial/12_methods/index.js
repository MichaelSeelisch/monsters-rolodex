var website = (function () {
    function website(url, fbLikes) {
        this.url = url;
        this.facebookLikes = fbLikes;
    }
    website.prototype.likesInk = function () {
        return (this.facebookLikes / 1000) + 'K';
    };
    return website;
}());
var newWeb = new website('http://google.com', 12345);
console.log(newWeb.likesInk());
