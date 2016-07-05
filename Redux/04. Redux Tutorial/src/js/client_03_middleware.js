import { applyMiddleware, createStore } from 'redux';

const reducer = (initialState=0, action) => {
  if(action.type === 'INC') {
    return initialState + 1;
  }
  else if(action.type === 'DEC') {
    return initialState - 1;
  }
  else if(action.type === 'E') {
    throw new Error('AAAA!!!!!!!!!');
  }

  return initialState;
}

const logger = (store) => (next) => (action) => {
  console.log('Action fired...', action);

  // Change action to always 'DEC'
  // action.type = 'DEC';
  next(action);
};

const error = (store) => (next) => (action) => {
  try {
    next(action);
  }
  catch(evt) {
    console.log('AHHHHH!!', evt);
  }
};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 1, middleware);

store.subscribe(() => {
  console.log('Store changed...', store.getState());
});

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
store.dispatch({type: 'DEC'});
store.dispatch({type: 'DEC'});
store.dispatch({type: 'DEC'});
store.dispatch({type: 'E'});
