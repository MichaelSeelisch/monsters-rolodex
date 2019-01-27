"use strict";

const level = require('level');
const sublevel = require('level-sublevel');

module.exports = sublevel(
    level('example-db', {
        valueEncoding: 'json'
    })
);

module.exports = dbName => {
    return sublevel(
        level(dbName, {
            valueEncoding: 'json'
        })
    );
};
