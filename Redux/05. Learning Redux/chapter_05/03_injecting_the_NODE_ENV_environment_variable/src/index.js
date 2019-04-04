import { createStore, compose } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { persistState } from 'redux-devtools';

import appReducer from './reducers';
import { createUser, createPost } from './actions';
import App from './components/App.jsx';
import DevTools from './containers/DevTools.jsx';

const enhancer = compose(
    DevTools.instrument(),
    persistState(getSessionKey())
);

let store = createStore(appReducer, {}, enhancer);
const initialState = store.getState();

// create users
if (!initialState.users || initialState.users.length === 0) {
    store.dispatch(createUser('dan', 'Daniel Bugl'));
    store.dispatch(createUser('des', 'Destiny'));
}

// create posts
if (!initialState.posts || initialState.posts.length === 0) {
    store.dispatch(createPost('dan', {
      title: 'First post',
      text: 'Hello world! This is the first blog post.',
      category: 'welcome',
    }));
    store.dispatch(createPost('des', {
      title: 'Another test',
      text: 'This is another test blog post.',
      category: 'test',
    }));
}

console.log('initial state:', store.getState())
store.subscribe(() =>
  console.log('state changed:', store.getState())
)

function getSessionKey () {
    const matches = window.location.href.match(/[?&]debug=([^&#]+)\b/);

    return (matches && matches.length > 0) ? matches[1] : null;
}

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
)

