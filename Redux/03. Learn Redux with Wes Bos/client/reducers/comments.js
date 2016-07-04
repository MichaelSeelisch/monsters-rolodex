// A reducer takes in two things:
// 1. The action (info about what happened)
// 2. Copy about current state

function postComments(state = [], action) {
  // Return the newstate with the new comment
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
          user: action.author,
          text: action.comment
        }
      ]
      break;

    case 'REMOVE_COMMENT':
    console.log('Removing a comment!');
    // We need to return the new state without the deleted comment
      return [
        // From the start to the one we want to delete
        ...state.slice(0, action.i),

        // After the deleted one, to the end
        ...state.slice(action.i + 1)
      ]

    default:
      return state;
      break;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // Take the current state
      ...state,

      // Overwrite thispost with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
