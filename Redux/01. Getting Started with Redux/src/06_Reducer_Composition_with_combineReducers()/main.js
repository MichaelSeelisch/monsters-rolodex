// Using an ES6 transpiler, like babel 
import expect from 'expect';
import deepFreeze from 'deep-freeze-strict';

const todo = (state, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};

		case 'TOGGLE_TODO':			
			if(state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, { 'completed': !state.completed });

		default:
			return state;
	}
};


const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];

		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));

		default:
			return state;
	}
};

const visibilityFilter = (
	state = 'SHOW_ALL',
	action
) => {
	switch(action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;

		default:
			return state;
	}
};


const { combineReducers } = Redux;
const todoApp = combineReducers({
	// Short:
	todos,
	visibilityFilter

	// Long:
	/* todos: todos,
	/* visibilityFilter: visibilityFilter
	*/
});

const { createStore } = Redux;
const store = createStore(todoApp);


console.log('Initial state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
	type: 'ADD_TODO',
	id: 0,
	text: 'Learn Redux'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
	type: 'ADD_TODO',
	id: 1,
	text: 'Go shopping'
});
console.log('Current state:');
console.log(store.getState());
console.log('--------------');
