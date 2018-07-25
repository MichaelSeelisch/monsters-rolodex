import { createStore } from 'redux';

import { createPost, editPost, setFilter } from './actions';
import appReducer from './reducers';

let store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log('state changed:', store.getState());
})

let state = appReducer(undefined, { type: 'INIT_ACTION' });
console.log('initial state:', state);

const root = document.getElementById('root');
const render = () => {
    root.innerHTML = '';

    const { posts } = store.getState();
    posts.forEach((post, index) => {
        const item = document.createElement('li');
        item.addEventListener('click', () =>
            store.dispatch(editPost(index, post.text + '!'))
        );

        const text = document.createTextNode(post.user + ' - ' + post.text);
        item.appendChild(text)
        root.appendChild(item)
    })
};

const stopRender = store.subscribe(render);

store.dispatch(createPost('dan', 'hello world'));
store.dispatch(createPost('des', 'second post')); 
