import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';

const initialState = {
  fetching: false,
  fetched: false,
  user: [],
  error: null
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_USERS_PENDING': {
        return {
          ...state,
          fetching: true
        };
      break;
    }

    case 'FETCH_USERS_REJECTED': {
        return {
          ...state,
          fetching: false,
          error: action.payload
        };
      break;
    }

    case 'FETCH_USERS_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          users: action.payload
        };
      break;
    }

    default: {
      return state;
      break;
    }
  }
  return state;
}

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);

// With promise...
store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get('http://rest.learncode.academy/api/wstern/users')
});

// With axios...
/*
  store.dispatch((dispatch) => {
    dispatch({ type: 'FETCH_USERS_PENDING' });
    axios.get('http://rest.learncode.academy/api/wstern/users')
      .then((response) => {
        dispatch({ type: 'FETCH_USERS_FULFILLED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_USERS_REJECTEDs, payload: err });
      })

    // Do something async
  });
*/
