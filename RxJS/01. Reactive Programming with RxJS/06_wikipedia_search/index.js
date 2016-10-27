var Cycle = require('@cycle/core');
var CycleDOM = require('@cycle/dom');
var hJSX = CycleDOM.hJSX;
var Rx = require('rx');

var MAIN_URL = 'https://en.wikipedia.org';
var WIKI_URL = MAIN_URL + '/wiki/';
var API_URL = MAIN_URL + '/w/api.php?action=query&list=search&format=json&srsearch=';

function main(responses) {
  return {
    DOM: Rx.Observable.just(CycleDOM.h('span', 'Hi there!'))
  };
}

var drivers = {
  DOM: CycleDOM.makeDOMDriver('#container')
};

Cycle.run(main, drivers);


/*
  function vtreeElements(results) {
    var h = CycleDOM.h;
    return h('div', [
      h('h1', 'Wikipedia Search'),
      h('input', { className: 'search-field', attributes: { type: text }}),
      h('hr'),
      h('div', results.map(function(result) {
        return h('div', [
          h('a', { href: WIKI_URL + result.title }, result.title)
        ]);
      }))
    ]);
  }
*/

function vtreeElementsJSX(results) {
  results = results.map(function(result) {
    var link = WIKI_URL + result.title;
    return `<div><a href={link}>{result.title}</a></div>`
  });

  return `<div>
    <h1>Wikipedia Search</h1>
    <input className="search-field" type="text" />
    <hr/>
    <div>{results}</div>
  </div>`;
}
