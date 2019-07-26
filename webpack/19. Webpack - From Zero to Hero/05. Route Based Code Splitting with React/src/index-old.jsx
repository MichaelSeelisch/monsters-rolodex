import React, { useState } from "react";
import { render } from "react-dom";

import landiPic from "../assets/landrover.jpg";
import landiSound from "../assets/landrover.mp3";
import "./style.scss";

const audio = new Audio(landiSound);

const App = () => {
  const [personState, setPersonState] = useState("😴");
  const wakeUp = () =>
    import(/* webpackChunkName: "myAwesomeLazyModule", webpackPreload: true */ "./lazy-one").then(
      mod => setPersonState(mod.default)
    );
  const lazyBtnStyle = {
    margin: "10px auto",
    display: "flex",
    fontSize: "4rem"
  };

  return (
    <div id="myMemes">
      <h1>You can't expect...</h1>
      <img src={landiPic} role="button" onClick={() => audio.play()} />
      <button style={lazyBtnStyle} onClick={() => wakeUp()}>
        {personState}
      </button>
    </div>
  );
};

const wrapper = document.createElement("div");
wrapper.setAttribute("id", "app");
document.body.appendChild(wrapper);

render(<App />, wrapper);
