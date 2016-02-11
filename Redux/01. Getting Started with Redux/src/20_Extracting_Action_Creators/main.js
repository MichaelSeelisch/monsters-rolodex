// Using an ES6 transpiler, like babel 
import expect from 'expect';
import deepFreeze from 'deep-freeze-strict';

const { Component } = React;

const { combineReducers } = Redux;

const { connect } = ReactRedux;
// ES6  via babel: import { connect } from 'react-redux';

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

const todoApp = combineReducers({
	// Short:
	todos,
	visibilityFilter

	// Long:
	/* todos: todos,
	/* visibilityFilter: visibilityFilter
	*/
});

let nextTodoId = 0;
const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	};
};

const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

const Todo = ({
	onClick,
	completed,
	text
}) => (
	<li
		onClick={
			onClick
		}
		style={{
			textDecoration:
				completed ?
					'line-through':
					'none'
		}}
	>
		{text}
	</li>
);

const TodoList = ({
	todos,
	onTodoClick
}) => (
	<ul>
		{todos.map(todo => 
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
			/>
		)}
	</ul>
);

const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	};
};

const Link = ({
	active,
	children,
	onClick
}) => {
	if(active) {
		return <span>{children}</span>;
	}
	return (
		<a href='#'
			onClick={e => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	);
};

const mapStateToLinkProps = (
	state,
	ownProps
) => {
	return {
		active:
			ownProps.filter === 
			state.visibilityFilter
	};
};

const mapDispatchToLinkProps = (
	dispatch,
	ownProps
) => {
	return {
		onClick: () => {
			dispatch(
				setVisibilityFilter(ownProps.filter)
			);
		}
	};
};

const FilterLink = connect(
	mapStateToLinkProps,
	mapDispatchToLinkProps
)(Link);

const Footer = () => (
	<p>
		Show:
		{' '}
		<FilterLink
			filter='SHOW_ALL'
		>
			All
		</FilterLink>
		{', '}
		<FilterLink
			filter='SHOW_ACTIVE'
		>
			Active
		</FilterLink>
		{', '}
		<FilterLink
			filter='SHOW_COMPLETED'
		>
			Completed
		</FilterLink>
	</p>
);

let AddTodo = ({
	dispatch
}) => {
	let input;

	return (
		<div>
			<input ref={node => {
				input = node;
			}} />
			<button onClick={() => {
				dispatch(addTodo(input.value));
				input.value = '';
			}}>
			Add Todo
			</button>
		</div>
	);
};
AddTodo = connect()(AddTodo);

const getVisibleTodos = (
	todos,
	filter
) => {
	switch(filter) {
		case 'SHOW_ALL':
			return todos;

		case 'SHOW_COMPLETED':
			return todos.filter(
				t => t.completed
			);

		case 'SHOW_ACTIVE':
			return todos.filter(
				t => !t.completed
			);
	}
};

const mapStateToTodoListProps = (
	state
) => {
	return {
		todos: getVisibleTodos(
			state.todos,
			state.visibilityFilter
		)
	};
};
const mapDispatchToTodoListProps = (
	dispatch
) => {
	return {
		onTodoClick: (id) => { 
			dispatch(toggleTodo(id));
		}
	};
};
const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);

const TodoApp = () => (	
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />		
	</div>
);

const { Provider } = ReactRedux;
// ES6  via babel: import { Provider } from 'react-redux';
// ES5: var Provider = require('react-redux').Provider;

const { createStore } = Redux;

ReactDOM.render(
	<Provider store={createStore(todoApp)}>
		<TodoApp />
	</Provider>,
	document.getElementById('root')
);
