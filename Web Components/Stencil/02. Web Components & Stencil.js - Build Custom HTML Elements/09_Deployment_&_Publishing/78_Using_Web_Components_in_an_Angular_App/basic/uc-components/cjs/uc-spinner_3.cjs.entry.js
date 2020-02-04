'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-c1f471ce.js');

const Spinner = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return (core.h("div", { class: "lds-ring" }, core.h("div", null), core.h("div", null), core.h("div", null), core.h("div", null)));
    }
    static get style() { return ".lds-ring{position:relative}.lds-ring,.lds-ring div{width:51px;height:51px;margin:6px}.lds-ring div{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;border:6px solid #3b013b;border-radius:50%;-webkit-animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#3b013b transparent transparent transparent}.lds-ring div:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}\@-webkit-keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes lds-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"; }
};

const AV_API_KEY = 'L7K9Q2JR3DN47HSF';

const StockFinder = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.searchResults = [];
        this.loading = false;
        this.ucSymbolSelected = core.createEvent(this, "ucSymbolSelected", 7);
    }
    onFindStocks(event) {
        event.preventDefault();
        this.loading = true;
        const stockName = this.stockNameInput.value;
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
            .then(res => {
            return res.json();
        })
            .then(parsedRes => {
            this.searchResults = parsedRes['bestMatches'].map(match => {
                return { name: match['2. name'], symbol: match['1. symbol'] };
            });
            console.log(this.searchResults);
        })
            .catch(err => {
            console.log(err);
        })
            .finally(() => {
            this.loading = false;
        });
    }
    onSelectSymbol(symbol) {
        this.ucSymbolSelected.emit(symbol);
    }
    render() {
        let content = (core.h("ul", null, this.searchResults.map(result => (core.h("li", { onClick: this.onSelectSymbol.bind(this, result.symbol) }, core.h("strong", null, result.symbol), " - ", result.name)))));
        if (this.loading) {
            content = core.h("uc-spinner", null, ";");
        }
        return [
            core.h("form", { onSubmit: this.onFindStocks.bind(this) }, core.h("input", { id: 'stock-symbol', ref: ref => this.stockNameInput = ref }), core.h("button", { type: 'submit' }, "Find")),
            content
        ];
    }
    static get style() { return ":host{border:2px solid var(--color-primary,#000);display:block;font-family:sans-serif;margin:2rem;max-width:100%;padding:1rem;width:20rem}form input{color:#3b013b;display:block;font:inherit;margin-bottom:.5rem;padding:.1rem .25rem}form button:focus,form input:focus{outline:none}form button{background:var(--color-primary,#000);border:1px solid var(--color-primary,#000);color:var(--color-primary-inverse,#fff);cursor:pointer;font:inherit;padding:.25rem .5rem}form button:active,form button:hover{background:var(--color-primary-highlight,grey);border-color:var(--color-primary-highlight,grey)}form button:disabled{background:#ccc;border-color:#ccc;color:#fff;cursor:not-allowed}ul{list-style:none;margin:0;padding:0}li{border:1px solid #ccc;cursor:pointer;margin:.25rem 0;padding:.25rem}li:active,li:hover{background-color:var(--color-primary,#000);color:var (--color-primary-inverse,#fff)}"; }
};

const StockPrice = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.fetchedPrice = 0;
        this.stockInputValid = false;
        this.loading = false;
    }
    stockSymboChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.stockUserInput = newValue;
            this.fetchStockPrice(newValue);
        }
    }
    onFetchStockPrice(event) {
        event.preventDefault();
        //  const stockSymbol = (this.el.shadowRoot.querySelector('#stock-symbol') as HTMLInputElement).value;
        this.stockSymbol = this.stockInput.value;
        //  this.fetchStockPrice(stockSymbol);
    }
    onUserInput(event) {
        this.stockUserInput = event.target.value;
        if (this.stockUserInput.trim() !== '') {
            this.stockInputValid = true;
        }
        else {
            this.stockInputValid = false;
        }
    }
    componentWillLoad() {
        console.log('componentWillLoad');
        console.log(this.stockSymbol);
    }
    componentDidLoad() {
        console.log('componentDidLoad');
        if (this.stockSymbol) {
            //  this.initialStockSymbol = this.stockSymbol;
            this.stockUserInput = this.stockSymbol;
            this.stockInputValid = true;
            this.fetchStockPrice(this.stockSymbol);
        }
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
        /*
            if (this.stockSymbol !== this.initialStockSymbol) {
                this.initialStockSymbol = this.stockSymbol;
                this.fetchStockPrice(this.stockSymbol);
            }
        */
    }
    componentDidUnload() {
        console.log('componentDidUnload');
    }
    onStockSymbolSelected(event) {
        console.log('Stock symbol selected: ', event.detail);
        if (event.detail && event.detail !== this.stockSymbol) {
            this.fetchStockPrice(event.detail);
        }
    }
    fetchStockPrice(stockSymbol) {
        this.loading = true;
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`)
            .then(res => {
            if (res.status !== 200) {
                throw new Error('Invalid!');
            }
            return res.json();
        })
            .then(parsedRes => {
            if (!parsedRes['Global Quote']) {
                throw new Error('Invalid symbol!');
            }
            this.error = null;
            this.fetchedPrice = +parsedRes['Global Quote']['05. price'];
        })
            .catch(err => {
            this.error = err.message;
            this.fetchedPrice = null;
        })
            .finally(() => {
            this.loading = false;
        });
    }
    hostData() {
        return {
            class: this.error ? 'hydrated error' : ''
        };
    }
    __stencil_render() {
        let dataContent = core.h("p", null, "Please enter a symbol!");
        if (this.error) {
            dataContent = core.h("p", null, this.error);
        }
        if (this.fetchedPrice) {
            dataContent = core.h("p", null, "Price: $", this.fetchedPrice);
        }
        if (this.loading) {
            dataContent = core.h("uc-spinner", null);
        }
        return [
            core.h("form", { onSubmit: this.onFetchStockPrice.bind(this) }, core.h("input", { id: 'stock-symbol', ref: ref => this.stockInput = ref, value: this.stockUserInput, onInput: this.onUserInput.bind(this) }), core.h("button", { type: 'submit', disabled: !this.stockInputValid || this.loading }, "Fetch")),
            core.h("div", null, dataContent)
        ];
    }
    get el() { return core.getElement(this); }
    static get watchers() { return {
        "stockSymbol": ["stockSymboChanged"]
    }; }
    render() { return core.h(core.Host, this.hostData(), this.__stencil_render()); }
    static get style() { return ":host{border:2px solid #3b013b;display:block;font-family:sans-serif;margin:2rem;max-width:100%;padding:1rem;width:20rem}:host(.error){border:2px solid red}form input{color:#3b013b;display:block;font:inherit;margin-bottom:.5rem;padding:.1rem .25rem}form button:focus,form input:focus{outline:none}form button{background:#3b013b;border:1px solid #3b013b;color:#fff;cursor:pointer;font:inherit;padding:.25rem .5rem}form button:active,form button:hover{background:#750175;border-color:#750175}form button:disabled{background:#ccc;border-color:#ccc;color:#fff;cursor:not-allowed}lds-ring{display:inline-block;position:relative;width:64px;height:64px}"; }
};

exports.uc_spinner = Spinner;
exports.uc_stock_finder = StockFinder;
exports.uc_stock_price = StockPrice;
