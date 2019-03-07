import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {
    StaticRouter,
    matchPath
} from 'react-router-dom';

import { App } from '../shared/App';
import { ROUTES } from '../shared/routes';

const PORT = process.env.PORT || 3001;

const app = express();
app.get('*', (req, res) => {
    const isRouteAvailable = ROUTES.find(route => {
        return matchPath(req.url, route);
    });

    /*
        const isRouteAvailable = matchPath(req.url, {
            path: '/dashboard/',
            strict: true
        });
    */

    const context = {
        "action": "REPLACE",
        "location": {
            "pathname": "/home",
            "search": "",
            "hash": "",
            "state": undefined
        },
        "url": "/home"
    }

    const reactMarkup = ReactDOMServer.renderToString(
        <StaticRouter
            context={context}
            location={req.url}>
            <App />
        </StaticRouter>
    );

    if (!isRouteAvailable) {
        res.status(404);
        res.send(`
            <!DOCTYPE HTML>
            <html>
                <head><title>React SSR example</title></head>
                <body>
                    <main id='app'>
                    Requested page '${req.url}' not found
                    </main>
                </body>
            </html>`);
        res.end();
    }

    if (context.url) {
        res.redirect(301, 'http://' + req.headers.host + context.url);
    } else {
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
    }
});

app.listen(PORT, () => {
    console.log(`SSR React Router app running at ${PORT}`);
});
