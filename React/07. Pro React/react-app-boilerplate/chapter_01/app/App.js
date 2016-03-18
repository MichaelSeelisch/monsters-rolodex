import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Parent Component
class GroceryList extends Component {
    render() {
        return (
            /* Example 1:
                <ul>
                    <ListItem quantity="1" name="Bread" />
                    <ListItem quantity="6" name="Eaggs" />
                    <ListItem quantity="2" name="Milk" />
                </ul>
            */
            /* Example 2: */
                <ul>
                    <ListItem quantity="1">Bread</ListItem>
                    <ListItem quantity="6">Eggs</ListItem>
                    <ListItem quantity="2">Milk</ListItem>
                </ul>
        );
    }
}

// Child Component
class ListItem extends Component {
    render() {
        return (
            /* Example 1:
                <li>
                    {this.props.quantity} x {this.props.name}
                </li>
            */
            /* Example 2: */
                <li>
                    {this.props.quantity} x {this.props.children}
                </li>
        )
    }
}

ReactDOM.render(<GroceryList />, document.getElementById('root'));
