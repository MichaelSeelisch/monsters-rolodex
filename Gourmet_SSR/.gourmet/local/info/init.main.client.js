"use strict"
let Renderer = [
  require("@gourmet/html-renderer"),
  require("@gourmet/react-renderer")
].reduce((Base, f) => f(Base), null);
const userObject = (m => m.__esModule ? m.default : m)(require("../../../src/hello.js"));
if (userObject.getClientRenderer) Renderer = userObject.getClientRenderer(Renderer);
const r = new Renderer(userObject);
r.render();