import React, { Component } from 'react';
import Perf from 'react-addons-perf';

import Item from './Item';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: ['foo', 'bar']
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const items = this.state.items.slice();
        items.unshift('baz');

        this.setState({
            items
        });
    }

    componentWillUpdate() {
        Perf.start();
    }

    componentDidUpdate() {
        Perf.stop();
        Perf.printWasted();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map(item => (
                        <Item key={item} item={item} />
                    ))}
                </ul>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
