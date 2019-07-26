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

/*
  import("./module-1").then(mod => {
    const nothing = mod.default();
    const nothingToo = mod.useless();

    // logs "This function does nothing and neither this one!"
    console.log(`${nothing} and ${nothingToo}`); 
  });
*/

const outputs = [1, 2].map(modNum =>
  import(`./module-${modNum}`).then(mod => mod.default())
);

Promise.all(outputs).then(outs => console.log(outs.join(" and ")));

const lazyButton = document.createElement("button");
lazyButton.innerText = "😴";
lazyButton.style = "margin: 10px auto; display: flex; font-size: 4rem";
lazyButton.onclick = () =>
  //  import("./lazy-one").then(mod => (lazyButton.innerText = mod.default));
  import(
    /* webpackChunkName: "myAwesomeLazyModule" */
    /* webpackPreload: true */
    "./lazy-one").then(mod => {
    lazyButton.innerText = mod.default
  });

  import './lazy-once';

document.body.appendChild(lazyButton);

import './products-page';