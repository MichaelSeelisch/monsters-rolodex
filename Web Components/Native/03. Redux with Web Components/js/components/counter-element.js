export class CounterElement extends HTMLElement {
    constructor() {
		super();

        this.count = null;
        this.attachShadow({
			mode: 'open'
		});
    }

    static get observedAttributes() {
        return ['value'];
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div>
                <div>Counter value is <span>${this.getAttribute('value')}</span></div>
                <button>Increment</button>
                <button>Decrement</button>
            </div>`;

        this.shadowRoot.querySelectorAll('button')[0].addEventListener('click', () => {
            this.increment();
        });
        this.shadowRoot.querySelectorAll('button')[1].addEventListener('click', () => {
            this.decrement();
		});

        this.count = this.shadowRoot.querySelector('span');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (!this.count) {
            return;
        }

        if (name === 'value' && newValue !== oldValue) {
            this.count.innerText = newValue;
        }
    }

    mapStateToProps(oldState, newState) {
        if (oldState === undefined) {
            this.attributeChangedCallback('value', null, newState.counter.count);
            return;
        }

        if (newState.counter.count !== oldState.counter.count) {
            this.attributeChangedCallback('value', oldState.counter.count, newState.counter.count);
        }
    }

    mapDispatchToProps(dispatch) {
        return {
            increment: () => dispatch({ type: 'INCREMENT' }),
            decrement: () => dispatch({ type: 'DECREMENT' })
        };
    }
}
