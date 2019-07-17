import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';

ReactDOM.render(
    <Counter initialCount={ 1 } />,
    document.getElementById('app')
);

module.hot.accept();