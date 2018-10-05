import React, { Component } from 'react';
import { connect } from 'react-redux';

import I from './I';
import Am from './Am';
import A from './A';
import Profession from './Profession';

class Description extends Component {
    constructor (props) {
        super(props);

        this.myConst = {
            value: "I "
        }
    }

    render() {
        return (
            <p>
                <I i={ this.myConst.value } />
                <Am />
                <A />
                <Profession profession={ this.props.description } />
            </p>
        );
    }
};

const mapStateToProps = state => ({
    description: state.description
});

export default connect(
    mapStateToProps,
    null
)(Description);
