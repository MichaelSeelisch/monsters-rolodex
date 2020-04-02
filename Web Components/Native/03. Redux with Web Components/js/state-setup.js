import { createStore, combineReducers } from 'redux';

function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

const reducers = combineReducers({
    counter: counterReducer
});

export const store = createStore(reducers);
