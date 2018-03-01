import { CREATE_POST } from './actionTypes';

export const createPost = (user, text) => {
    return {
        type: CREATE_POST,
        user,
        text
    }
}