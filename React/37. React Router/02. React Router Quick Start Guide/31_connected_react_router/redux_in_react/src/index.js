import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import Counter from './components/Counter';

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(applyMiddleware(routerMiddleware(history)))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Counter />
        </ConnectedRouter>x
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
