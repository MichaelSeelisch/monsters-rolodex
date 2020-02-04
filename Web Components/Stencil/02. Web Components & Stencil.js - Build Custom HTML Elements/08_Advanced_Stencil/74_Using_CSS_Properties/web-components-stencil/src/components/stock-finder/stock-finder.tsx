import { Component, h, State, Event, EventEmitter } from '@stencil/core';

import { AV_API_KEY } from '../../global/global';

@Component({
    tag: 'uc-stock-finder',
    styleUrl: './stock-finder.css',
    shadow: true
})
export class StockFinder {
    stockNameInput: HTMLInputElement;

    @State() searchResults: {symbol: string, name: string}[] = [];
    @State() loading: boolean = false;

    @Event({
        bubbles: true,
        composed: true
    }) ucSymbolSelected: EventEmitter<string>;

    onFindStocks(event: Event) {
        event.preventDefault();

        this.loading = true;

        const stockName = this.stockNameInput.value;

        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`)
            .then(res => {
                return res.json();
            })
            .then(parsedRes => {
                this.searchResults = parsedRes['bestMatches'].map(match => {
                    return { name: match['2. name'], symbol: match['1. symbol'] }
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

    onSelectSymbol(symbol: string) {
        this.ucSymbolSelected.emit(symbol);
    }

    render() {
        let content = (
            <ul>
                {this.searchResults.map(result => (
                    <li onClick={this.onSelectSymbol.bind(this, result.symbol)}><strong>{ result.symbol }</strong> - { result.name }</li>
                ))}
            </ul>
        );

        if (this.loading) {
            content = <uc-spinner>;</uc-spinner>
        }
        return [
            <form onSubmit={this.onFindStocks.bind(this)}>
                <input
                    id='stock-symbol'
                    ref={ref => this.stockNameInput = ref} />
                <button
                    type='submit'>
                    Find
                </button>
            </form>,

            content
        ];
    }
}