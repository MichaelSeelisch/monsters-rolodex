import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Async from "react-async";

const loadUser = ({ userId }) =>
  fetch(`https://reqres.in/api/users/${userId}`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json());

const UserPlaceholder = () => (
  <div>
    <div>User Details Loading</div>
  </div>
);

const UserDetails = ({ data }) => (
  <div className="details">
    <img className="avatar" src={data.data.avatar} alt="" />
    <div>
      {data.data.first_name} {data.data.last_name}
    </div>
  </div>
);

const App = () => (
  <Async promiseFn={loadUser} userId={1}>
    <Async.Pending>
      <UserPlaceholder />
    </Async.Pending>
    <Async.Fulfilled>{data => <UserDetails data={data} />}</Async.Fulfilled>
    <Async.Rejected>{error => <p>{error.message}</p>}</Async.Rejected>
  </Async>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
