var page = require('webpage').create();
page.open('http://bild.de/', function() {
  page.render('bild.png');
  phantom.exit();
});