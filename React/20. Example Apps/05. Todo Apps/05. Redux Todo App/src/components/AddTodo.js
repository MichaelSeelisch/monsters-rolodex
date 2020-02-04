import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={evt => this.handleClick(evt)}>
                    Add
                </button>
            </div>
        )
    }

    handleClick(evt) {
        const node = this.refs.input;
        const text = node.value.trim();

        this.props.onAddClick(text);
        node.value = '';
    }
};

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};