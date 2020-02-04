import { r as registerInstance, h, c as createEvent, g as getElement, H as Host } from './core-ce1e7670.js';
var Spinner = /** @class */ (function () {
    function Spinner(hostRef) {
        registerInstance(this, hostRef);
    }
    Spinner.prototype.render = function () {
        return (h("div", { class: "lds-ring" }, h("div", null), h("div", null), h("div", null), h("div", null)));
    };
    Object.defineProperty(Spinner, "style", {
        get: function () { return ".lds-ring{position:relative}.lds-ring,.lds-ring div{width:51px;height:51px;margin:6px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;border:6px solid #3b013b;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#3b013b transparent transparent transparent}.lds-ring div:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}\@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"; },
        enumerable: true,
        configurable: true
    });
    return Spinner;
}());
var AV_API_KEY = 'L7K9Q2JR3DN47HSF';
var StockFinder = /** @class */ (function () {
    function StockFinder(hostRef) {
        registerInstance(this, hostRef);
        this.searchResults = [];
        this.loading = false;
        this.ucSymbolSelected = createEvent(this, "ucSymbolSelected", 7);
    }
    StockFinder.prototype.onFindStocks = function (event) {
        var _this = this;
        event.preventDefault();
        this.loading = true;
        var stockName = this.stockNameInput.value;
        fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + stockName + "&apikey=" + AV_API_KEY)
            .then(function (res) {
            return res.json();
        })
            .then(function (parsedRes) {
            _this.searchResults = parsedRes['bestMatches'].map(function (match) {
                return { name: match['2. name'], symbol: match['1. symbol'] };
            });
            console.log(_this.searchResults);
        })
            .catch(function (err) {
            console.log(err);
        })
            .finally(function () {
            _this.loading = false;
        });
    };
    StockFinder.prototype.onSelectSymbol = function (symbol) {
        this.ucSymbolSelected.emit(symbol);
    };
    StockFinder.prototype.render = function () {
        var _this = this;
        var content = (h("ul", null, this.searchResults.map(function (result) { return (h("li", { onClick: _this.onSelectSymbol.bind(_this, result.symbol) }, h("strong", null, result.symbol), " - ", result.name)); })));
        if (this.loading) {
            content = h("uc-spinner", null, ";");
        }
        return [
            h("form", { onSubmit: this.onFindStocks.bind(this) }, h("input", { id: 'stock-symbol', ref: function (ref) { return _this.stockNameInput = ref; } }), h("button", { type: 'submit' }, "Find")),
            content
        ];
    };
    Object.defineProperty(StockFinder, "style", {
        get: function () { return ":host{border:2px solid var(--color-primary,#000);display:block;font-family:sans-serif;margin:2rem;max-width:100%;padding:1rem;width:20rem}form input{color:#3b013b;display:block;font:inherit;margin-bottom:.5rem;padding:.1rem .25rem}form button:focus,form input:focus{outline:none}form button{background:var(--color-primary,#000);border:1px solid var(--color-primary,#000);color:var(--color-primary-inverse,#fff);cursor:pointer;font:inherit;padding:.25rem .5rem}form button:active,form button:hover{background:var(--color-primary-highlight,grey);border-color:var(--color-primary-highlight,grey)}form button:disabled{background:#ccc;border-color:#ccc;color:#fff;cursor:not-allowed}ul{list-style:none;margin:0;padding:0}li{border:1px solid #ccc;cursor:pointer;margin:.25rem 0;padding:.25rem}li:active,li:hover{background-color:var(--color-primary,#000);color:var (--color-primary-inverse,#fff)}"; },
        enumerable: true,
        configurable: true
    });
    return StockFinder;
}());
var StockPrice = /** @class */ (function () {
    function StockPrice(hostRef) {
        registerInstance(this, hostRef);
        this.fetchedPrice = 0;
        this.stockInputValid = false;
        this.loading = false;
    }
    StockPrice.prototype.stockSymboChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.stockUserInput = newValue;
            this.fetchStockPrice(newValue);
        }
    };
    StockPrice.prototype.onFetchStockPrice = function (event) {
        event.preventDefault();
        //  const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
        this.stockSymbol = this.stockInput.value;
        //  this.fetchStockPrice(stockSymbol);
    };
    StockPrice.prototype.onUserInput = function (event) {
        this.stockUserInput = event.target.value;
        if (this.stockUserInput.trim() !== '') {
            this.stockInputValid = true;
        }
        else {
            this.stockInputValid = false;
        }
    };
    StockPrice.prototype.componentWillLoad = function () {
        console.log('componentWillLoad');
        console.log(this.stockSymbol);
    };
    StockPrice.prototype.componentDidLoad = function () {
        console.log('componentDidLoad');
        if (this.stockSymbol) {
            //  this.initialStockSymbol = this.stockSymbol;
            this.stockUserInput = this.stockSymbol;
            this.stockInputValid = true;
            this.fetchStockPrice(this.stockSymbol);
        }
    };
    StockPrice.prototype.componentWillUpdate = function () {
        console.log('componentWillUpdate');
    };
    StockPrice.prototype.componentDidUpdate = function () {
        console.log('componentDidUpdate');
        /*
            if (this.stockSymbol !== this.initialStockSymbol) {
                this.initialStockSymbol = this.stockSymbol;
                this.fetchStockPrice(this.stockSymbol);
            }
        */
    };
    StockPrice.prototype.componentDidUnload = function () {
        console.log('componentDidUnload');
    };
    StockPrice.prototype.onStockSymbolSelected = function (event) {
        console.log('Stock symbol selected: ', event.detail);
        if (event.detail && event.detail !== this.stockSymbol) {
            this.fetchStockPrice(event.detail);
        }
    };
    StockPrice.prototype.fetchStockPrice = function (stockSymbol) {
        var _this = this;
        this.loading = true;
        fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockSymbol + "&apikey=" + AV_API_KEY)
            .then(function (res) {
            if (res.status !== 200) {
                throw new Error('Invalid!');
            }
            return res.json();
        })
            .then(function (parsedRes) {
            if (!parsedRes['Global Quote']) {
                throw new Error('Invalid symbol!');
            }
            _this.error = null;
            _this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
        })
            .catch(function (err) {
            _this.error = err.message;
            _this.fetchedPrice = null;
        })
            .finally(function () {
            _this.loading = false;
        });
    };
    StockPrice.prototype.hostData = function () {
        return {
            class: this.error ? 'hydrated error' : ''
        };
    };
    StockPrice.prototype.__stencil_render = function () {
        var _this = this;
        var dataContent = h("p", null, "Please enter a symbol!");
        if (this.error) {
            dataContent = h("p", null, this.error);
        }
        if (this.fetchedPrice) {
            dataContent = h("p", null, "Price: $", this.fetchedPrice);
        }
        if (this.loading) {
            dataContent = h("uc-spinner", null);
        }
        return [
            h("form", { onSubmit: this.onFetchStockPrice.bind(this) }, h("input", { id: 'stock-symbol', ref: function (ref) { return _this.stockInput = ref; }, value: this.stockUserInput, onInput: this.onUserInput.bind(this) }), h("button", { type: 'submit', disabled: !this.stockInputValid || this.loading }, "Fetch")),
            h("div", null, dataContent)
        ];
    };
    Object.defineProperty(StockPrice.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StockPrice, "watchers", {
        get: function () {
            return {
                "stockSymbol": ["stockSymboChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    StockPrice.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
    Object.defineProperty(StockPrice, "style", {
        get: function () { return ":host{border:2px solid #3b013b;display:block;font-family:sans-serif;margin:2rem;max-width:100%;padding:1rem;width:20rem}:host(.error){border:2px solid red}form input{color:#3b013b;display:block;font:inherit;margin-bottom:.5rem;padding:.1rem .25rem}form button:focus,form input:focus{outline:none}form button{background:#3b013b;border:1px solid #3b013b;color:#fff;cursor:pointer;font:inherit;padding:.25rem .5rem}form button:active,form button:hover{background:#750175;border-color:#750175}form button:disabled{background:#ccc;border-color:#ccc;color:#fff;cursor:not-allowed}lds-ring{display:inline-block;position:relative;width:64px;height:64px}"; },
        enumerable: true,
        configurable: true
    });
    return StockPrice;
}());
export { Spinner as uc_spinner, StockFinder as uc_stock_finder, StockPrice as uc_stock_price };
