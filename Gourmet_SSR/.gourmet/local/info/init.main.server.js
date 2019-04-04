"use strict"
let Renderer = [
  require("@gourmet/html-renderer/server"),
  require("@gourmet/react-renderer/server")
].reduce((Base, f) => f(Base), null);
const userObject = (m => m.__esModule ? m.default : m)(require("../../../src/hello.js"));
if (userObject.getServerRenderer) Renderer = userObject.getServerRenderer(Renderer);
const r = new Renderer(userObject);
module.exports = r.getRenderer.bind(r);