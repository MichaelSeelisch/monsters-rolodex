import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { createPost } from './actions'

import appReducer from './reducers'

import ConnectedPostList from './containers/ConnectedPostList.jsx';

let store = createStore(appReducer);

store.dispatch(createPost('dan', 'hello world'));

setTimeout(() =>
    store.dispatch(createPost('des', 'hi!')), 1000);

ReactDOM.render(
    <ConnectedPostList store={store} />,
    document.getElementById('root')
);
