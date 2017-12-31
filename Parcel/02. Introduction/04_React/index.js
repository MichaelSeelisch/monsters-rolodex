import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

const App = () => (
    <h1>Hello, React!</h1>
);

const rootDiv = document.getElementById('root');

ReactDOM.render(<App />, rootDiv);