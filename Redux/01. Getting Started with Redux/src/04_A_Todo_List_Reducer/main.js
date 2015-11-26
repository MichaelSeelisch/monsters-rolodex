// Using an ES6 transpiler, like babel 
import expect from 'expect';
import deepFreeze from 'deep-freeze-strict';


const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			];

		case 'TOGGLE_TODO':
			return state.map(todo => {
				if(todo.id !== action.id) {
					return todo;
				}

				/* Error using ES6:
					return {
						...todo, 
						'completed': !todo.completed
					}
				/* ..so using ES5...
				*/

				return Object.assign({}, todo, { 'completed': !todo.completed });
			});

		default:
			return state;
	}
};

const testAddToDo = () => {
	const stateBefore = [];
	
	const action = {
		type: 'ADD_TODO',
		id: 0,
		text: 'Learn Redux'
	};
	
	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		}
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter);
};

const testToggleTodo = () => {
	const stateBefore = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1,
			text: 'Go shopping',
			completed: false
		}
	];

	const action = {
		type: 'TOGGLE_TODO',
		id: 1
	};

	const stateAfter = [
		{
			id: 0,
			text: 'Learn Redux',
			completed: false
		},
		{
			id: 1,
			text: 'Go shopping',
			completed: true
		}
	];

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter);
};

testAddToDo();
testToggleTodo();
console.log('All tests passed.');