import { combineReducers } from 'redux';

import { CREATE_POST, EDIT_POST, SET_FILTER } from './actionTypes';

function postsReducer (state = [], action) {
    switch (action.type) {
        case CREATE_POST: {
            const {type, ...post} = action;
            
            return [...state, post];
        }
        
        case EDIT_POST: {
            const {type, id, ...newPost} = action;

            /*  When the index value matches the id specified in the action, 
             *  the post object will be overwritten with all other properties 
             *  from the action. When the index value doesn't match, 
             *  we simply return the oldPost.
             */ 
            return state.map((oldPost, index) =>
                // We use the spread operator to combine the objects
                action.id === index ? { ...oldPost, ...newPost } : oldPost
            );
        }

        default:
            return state;
    }
};

function filterReducer (state = 'all', action) {
    if (action.type === SET_FILTER) {
        return action.filter
    } else {
        return state
    }
}

const appReducer = combineReducers({
    posts: postsReducer,
    filter: filterReducer,
});

export default appReducer;