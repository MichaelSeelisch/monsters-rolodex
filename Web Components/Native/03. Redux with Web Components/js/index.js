import { CounterElement } from './components/counter-element';
import { store } from './state-setup';
import { connect } from 'webcomponents-redux';

connect(
    CounterElement,
    store
);

customElements.define('counter-element', CounterElement);
