var Cycle = require('@cycle/core');
    CycleDOM = require('@cycle/dom'),
    CycleJSONP = require('@cycle/jsonp'),
    hJSX = CycleDOM.hJSX,
    Rx = require('rx');

var MAIN_URL = 'https://en.wikipedia.org';
var WIKI_URL = MAIN_URL + '/wiki/';
var API_URL = MAIN_URL + '/w/api.php?action=query&list=search&format=json&srsearch=';

function intent(JSONP) {
  return JSONP.filter(function(res$) {
    return res$.request.indexOf(API_URL) === 0;
  })
  .concatAll()
  .pluck('query', 'search');
}

function model(actions) {
  return actions.startWith([]);
}

function view(state) {
  var h = CycleDOM.h;
  return state.map(function(linkArray) {
    return h('div', [
      h('h1', 'Wikipedia Search'),
      h('input', { className: 'search-field', attributes: { type: 'text' }}),
      h('hr'),
      h('div', linkArray.map(function(link) {
        return h('div', [
          h('a', { href: WIKI_URL + link.title }, link.title)
        ]);
      }))
    ]);
  });
}

function userIntent(DOM) {
  return DOM.select('search-fied').events('input')
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

function main(responses) {
  return {
    DOM: view(model(intent(responses.JSONP))),
    JSONP: userIntent(responses.DOM)
  };
}

Cycle.run(main, {
  DOM: CycleDOM.makeDOMDriver('#container'),
  JSONP: CycleJSONP.makeJSONPDriver()
});
