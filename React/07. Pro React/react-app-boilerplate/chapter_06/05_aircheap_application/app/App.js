import React, {Component} from 'react';
import {render} from 'react-dom';
import {Container} from 'flux/utils';
import AutoSuggest from 'react-autosuggest-legacy';

import AirportStore from './stores/AirportStore';
import RouteStore from './store/RouteStore';
import TicketStore from './store/TicketStore';
import AirportActionCreators from './actions/AirportActionCreators';

class App extends Component {
    getSuggestions(input, callback) {
        const escapeInput = input.trim().toLowerCase();
        const airportMatchRegex = new RegExp('\\b' + escapeInput, 'i');
        const suggestions = this.state.airports
            .filter(airport => airportMatchRegex.test(airport.city))
            .sort((airport1, airport2) => {
                airport1.city.toLowerCase().indexOf(escapeInput) -
                airport2.city.toLowerCase().indexOf(escapeInput);
            })
            .slice(0, 7)
            .map(airport => `${airport.city} - ${airport.country} (${airport.code})`);
        
        callback(null, suggestions);
    }
    
    componentDidMount() {
        AirportActionCreators.fetchAirports();
    }

    render() {
        return(
            <div>
                <header>
                    <div className='header-brand'>
                        <img src='img/logo.png' height='35' />
                        <p>Check discount ticket prices and pay using your AirCheap points</p>
                    </div>
                    <div className='header-route'>
                        <AutoSuggest id='origin' suggestions={this.getSuggestions.bind(this)} inputAttributes={{placeholder: 'From'}} />
                        <AutoSuggest id='destination' suggestions={this.getSuggestions.bind(this)} inputAttributes={{placeholder: 'To'}} />
                    </div>
                </header>
            </div>
        );
    }
}

App.getStores = () => ([
    AirportStore,
    RouteStore,
    TicketStore
]);

App.calculateState = (prevState) => ({
    airports: AirportStore.getState(),
    origin: RouteStore.get('origin'),
    destination: RouteStore.get('destination'),
    tickets: TicketStore.getState()
});

const AppContainer = Container.create(App);

render(<AppContainer />, document.getElementById('root'));