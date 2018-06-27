import React from 'react';
import ReactDOM from 'react-dom';

const Greeting = ({ name }) => (
    const uppercaseName = name.toUpperCase();

    return (
        <h1>
            Hello { uppercaseName }!
        </h1>
    )
);

ReactDOM.render(
    <Greetng name='dan' />
    document.getElementById('root')
);
