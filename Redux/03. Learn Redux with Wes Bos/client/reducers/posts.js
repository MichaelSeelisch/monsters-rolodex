// A reducer takes in two things:
// 1. The action (info about what happened)
// 2. Copy about current state

function posts(state = [], action) {
  console.info('The post will change!');
  console.log(state, action);
  return state;
}

export default posts;
