var Cycle = require('@cycle/core');
    CycleDOM = require('@cycle/dom'),
    CycleJSONP = require('@cycle/jsonp'),
    Rx = require('rx'),
    h = CycleDOM.h,
    SearchBox = require('./searchbox');

var MAIN_URL = 'https://en.wikipedia.org';
var WIKI_URL = MAIN_URL + '/wiki/';
var API_URL = MAIN_URL + '/w/api.php?action=query&list=search&format=json&srsearch=';

function main(responses) {
  var wpSearchBox = SearchBox({
    DOM: responses.DOM,
    props$: Rx.Observable.just({
      apiUrl: API_URL
    })
  });

  var searchDOM$ = wpSearchBox.DOMTree;

  var searchResults$ = responses.JSONP
    .filter(function(res$) {
      return res$.request.indexOf(API_URL) === 0;
    })
    .concatAll()
    .pluck('query', 'search')
    .startWith([]);

  return {
    JSONP: wpSearchBox.JSONPQuery,
    DOM: Rx.Observable.combinLatest(
      searchDOM$, searchResults$, function(tree, links) {
        return h('div', [
          h('h1', 'Wikipedia Search'),
          tree,
          h('hr'),
          h('div', links.map(function(link) {
            return h('div', [
              h('a', { href: WIKI_URL + link.title }, link.title)
            ]);
          }))
        ]);
      }
    )
  };
}

Cycle.run(main, {
  DOM: CycleDOM.makeDOMDriver('#container'),
  JSONP: CycleJSONP.makeJSONPDriver()
});
