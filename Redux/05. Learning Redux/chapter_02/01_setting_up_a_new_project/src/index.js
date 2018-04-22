import { createPost, editPost, setFilter } from './actions';
import { postsReducer } from './reducers';

const initialState = [];

const action = createPost('dan', 'New post');

const newState = postsReducer(initialState, action);

console.log(newState);