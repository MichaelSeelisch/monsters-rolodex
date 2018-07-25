import React from 'react';
import ReactDOM from 'react-dom';

import Post from './components/Post.jsx';

ReactDOM.render(<Post user='Dan' text='Hello World!' />,
    document.getElementById('root')
);
