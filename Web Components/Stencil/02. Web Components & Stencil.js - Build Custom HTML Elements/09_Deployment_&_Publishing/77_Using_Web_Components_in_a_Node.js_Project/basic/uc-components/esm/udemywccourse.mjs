import { p as patchBrowser, b as bootstrapLazy } from './core-ce1e7670.js';

patchBrowser().then(options => {
  return bootstrapLazy([["uc-spinner_3",[[1,"uc-stock-finder",{"searchResults":[32],"loading":[32]}],[1,"uc-stock-price",{"stockSymbol":[1537,"stock-symbol"],"fetchedPrice":[32],"stockUserInput":[32],"stockInputValid":[32],"error":[32],"loading":[32]},[[32,"ucSymbolSelected","onStockSymbolSelected"]]],[1,"uc-spinner"]]]], options);
});
