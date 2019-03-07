import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
    StaticRouter,
    matchPath
} from 'react-router-dom';

import { App } from '../shared/App';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static('dist/public'));
app.get('*', (req, res) => {
    res.send(`
        <!DOCTYPE HTML>
        <html>
            <head>
                <title>React SSR example</title>
                <script src='/client.js' defer></script>
            </head>
            <body>
                <main id='app'>Body content...</main>
            </body>
        </html>
    `);
});


app.listen(PORT, () => {
    console.log(`SSR React Router app running at ${PORT}`);
});
