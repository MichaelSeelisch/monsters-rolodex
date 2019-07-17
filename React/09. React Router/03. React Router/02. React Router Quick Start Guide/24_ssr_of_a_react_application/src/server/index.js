import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from '../shared/App';

const PORT = process.env.PORT || 3001;

const app = express();
app.get('*', (req, res) => {
    const reactMarkup = ReactDOMServer.renderToString(<App />);

    res.send(`
        <!DOCTYPE HTML>
        <html>
            <head>
                <title>React SSR example</title>
            </head>
            <body>
                <main id='app'>${reactMarkup}</main>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`SSR React Router app running at ${PORT}`);
});
