import { hello } from "./hello";
import landiPic from "../assets/landrover.jpg";
import landiSound from "../assets/landrover.mp3";
import "./style.scss";

hello("OLX Dev!");

document.body.innerHTML = '<div id="myMemes"></div>';
document.getElementById("myMemes").innerHTML = `
  <h1>And his name is...</h1>
  <img src="${landiPic}" />
`;

const audio = new Audio(landiSound);
const img = document.querySelector("#myMemes img");

img.addEventListener("click", event => audio.play());