"use strict";

const level = require('level');
const sublevel = require('level-sublevel');

module.exports = sublevel(
    level('example-db', {
        valueEncoding: 'json'
    })
);

module.exports = (serviceLocator) => {
    const dbName = serviceLocator.get('dbName');

    return sublevel(
        level(dbName, {valueEncoding: 'json'})
    );
}
