'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-c1f471ce.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["uc-spinner_3.cjs",[[1,"uc-stock-finder",{"searchResults":[32],"loading":[32]}],[1,"uc-stock-price",{"stockSymbol":[1537,"stock-symbol"],"fetchedPrice":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32],"loading":[32]},[[32,"ucSymbolSelected","onStockSymbolSelected"]]],[1,"uc-spinner"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
