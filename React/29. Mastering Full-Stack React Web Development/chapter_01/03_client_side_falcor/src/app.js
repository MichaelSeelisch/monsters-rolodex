import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import article from './reducers/article';
import PublishingApp from './layouts/PublishingApp';

const store = createStore(article);

ReactDOM.render(
    <Provider store={ store }>
        <PublishingApp />
    </Provider>,
    document.getElementById('publishingAppRoot')
);
