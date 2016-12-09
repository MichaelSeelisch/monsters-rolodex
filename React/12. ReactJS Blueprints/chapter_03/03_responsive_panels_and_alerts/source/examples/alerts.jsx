'use strict';

import React from 'react';
import { Alert, Button } from 'react-bootstrap';

const Alerts = React.createClass({
  getInitialState() {
    return {
      alertVisible: true
    };
  },

  render() {
    if (this.state.alertVisible) {
      return(
        <Alert 
          bsStyle='danger'
          isDismissable
          onDismiss = {() => {
            this.setState({
              alertVisible: false
            })
          }}>

          <h4>An error has occured!</h4>
          <p>Try something else and hope for the best.</p>
          <p>
            <Button bsStyle='danger'>Do this</Button>
            <span> or </span>
            <Button onClick={() => {
                this.setState({
                  alertVisible: false
                })
              }}>Forget it
            </Button>
          </p>
        </Alert>
      )
    }
    else {
      return null;
    }
  }
});

module.exports = Alerts;