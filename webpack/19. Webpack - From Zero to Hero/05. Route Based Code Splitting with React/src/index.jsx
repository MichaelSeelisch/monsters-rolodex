import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { render } from "react-dom";

const lazyRoute = lazyModule => {
    const LazyComponent = lazy(lazyModule);

    return (
      <Suspense fallback={<div>Loading ...</div>}>
        <LazyComponent />
      </Suspense>
    );
  };
  
  const Page1 = () => lazyRoute(() => import("./modules/Page-1"));
  const Page2 = () => lazyRoute(() => import("./modules/Page-2"));
  const Page3 = () => lazyRoute(() => import("./modules/Page-3"));
  const Page4 = () =>
    lazyRoute(() =>
        import(
            /* webpackPrefetch: true, webpackChunkName: "importantModule" */
            "./modules/Page-4"
        )
    );

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Route path="/" exact component={() => <h1>Home Page</h1>} />
      <Route path="/page-1" component={Page1} />
      <Route path="/page-2" component={Page2} />
      <Route path="/page-3" component={Page3} />
      <Route path="/page-4" component={Page4} />

      <ul>
        {[1, 2, 3, 4].map(number => (
          <li key={number}>
            <Link to={`/page-${number}`}>Page {number}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  </BrowserRouter>
);

const wrapper = document.createElement("div");
wrapper.setAttribute("id", "app");
document.body.appendChild(wrapper);

render(<App />, wrapper);