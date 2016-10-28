var Cycle = require('@cycle/core');
    CycleDOM = require('@cycle/dom'),
    CycleJSONP = require('@cycle/jsonp'),
    hJSX = CycleDOM.hJSX,
    Rx = require('rx');

var MAIN_URL = 'https://en.wikipedia.org';
var WIKI_URL = MAIN_URL + '/wiki/';
var API_URL = MAIN_URL + '/w/api.php?action=query&list=search&format=json&srsearch=';

function searchRequest(responses) {
  return responses.DOM
    .select('.search-field')
    .events('input')
    .debounce(300)
    .map(function(event) {
      return event.target.value
    })
    .filter(function(value) {
      return value.length > 2
    })
    .map(function(search) {
      return API_URL + search
    });
}

function vtreeElements(results) {
  var h = CycleDOM.h;
  return h('div', [
    h('h1', 'Wikipedia Search'),
    h('input', { className: 'search-field', attributes: { type: 'text' }}),
    h('hr'),
    h('div', results.map(function(result) {
      return h('div', [
        h('a', { href: WIKI_URL + result.title }, result.title)
      ]);
    }))
  ]);
}

/*
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
*/

function main(responses) {
  var vtree$ = responses.JSONP
    .filter(function(res$) {
      return res$.request.indexOf(API_URL) === 0;
    })
    .mergeAll()
    .pluck('query', 'search')
    .startWith([])
    .map(vtreeElements);

  return {
    DOM: vtree$,
    JSONP: searchRequest(responses)
  };
}

var drivers = {
  DOM: CycleDOM.makeDOMDriver('#container'),
  JSONP: CycleJSONP.makeJSONPDriver()
};

Cycle.run(main, drivers);
