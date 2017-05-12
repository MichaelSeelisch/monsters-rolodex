require("./style.css");
var currentDate = require("./depends.js")
document.write("Hello World " + currentDate());

var img1 = document.createElement("img");
img1.src = require("./small.png");
document.body.appendChild(img1);
