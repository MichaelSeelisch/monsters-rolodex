import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Async from "react-async";

const loadJson = () =>
  fetch("https://api.coinmarketcap.com/v1/ticker/?limit=1")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const App = () => (
  <Async promiseFn={loadJson}>
    {({ data, error, isLoading }) => {
      if (isLoading) return "Loading...";
      if (error) return `Something went wrong: ${error.message}`;
      if (data)
        return (
          <div>
            {data.map((el, i) => (
              <li key={i}>
                {el.name}: {el.price_usd}
              </li>
            ))}
          </div>
        );
      return null;
    }}
  </Async>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
