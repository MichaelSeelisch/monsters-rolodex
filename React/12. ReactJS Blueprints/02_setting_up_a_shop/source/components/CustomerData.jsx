'user strict';

import React from 'react';
import {
  FormGroup,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap';
import clone from 'lodash/clone';

import CustomerActions from '../actions/CustomerActions';

const CustomerData = React.createClass({
  getDefaultProps() {
    return {
      customer: {
        address: {},
        validAddress: false
      }
    }
  },

  getInitialState() {
    return {
      customer: {
        name: this.props.customer.address.name ? this.props.address.name : '',
        address: this.props.customer.address.address ? this.props.customer.address.address : '',
        zipCode: this.props.customer.address.zipCode ? this.props.customer.address.zipCode : '',
        city: this.props.customer.address.city ? this.props.customer.address.city : '',
        validAddress: this.props.customer.address.validAddress ? this.props.customer.address.validAddress : false,
      }
    }
  },

  validationStateName() {
    if(this.state.customer.name.length > 5) {
      return 'success';
    }
    else if(this.state.customer.name.length > 2) {
      return 'warning';
    }
    else {
      return 'error';
    }
  },

  handleChangeName(event) {
    let customer = clone(this.state.customer);
    customer.name = event.target.form[0].value;
    
    this.setState({
      customer,
      validAddress: this.checkAllValidations()
    });

    CustomerActions.SaveAddress(this.state);
  },

  validationStateAddress() {
   if(this.state.customer.address.length > 5) {
      return 'success';
    }
    else if(this.state.customer.address.length > 2) {
      return 'warning';
    }
    else {
      return 'error';
    }
  },

  handleChangeAddress(event) {
    let customer = clone(this.state.customer);
    customer.address = event.target.form[1].value;
    
    this.setState({
      customer,
      validAddress: this.checkAllValidations()
    });

    CustomerActions.SaveAddress(this.state);
  },

  validationStateZipCode() {
   if(this.state.customer.zipCode.length > 5) {
      return 'success';
    }
    else if(this.state.customer.zipCode.length > 2) {
      return 'warning';
    }
    else {
      return 'error';
    }
  },

  handleChangeZipCode(event) {
    let customer = clone(this.state.customer);
    customer.zipCode = event.target.form[2].value;
    
    this.setState({
      customer,
      validAddress: this.checkAllValidations()
    });

    CustomerActions.SaveAddress(this.state);
  },

  validationStateCity() {
   if(this.state.customer.city.length > 5) {
      return 'success';
    }
    else if(this.state.customer.city.length > 2) {
      return 'warning';
    }
    else {
      return 'error';
    }
  },

  handleChangeCity(event) {
    let customer = clone(this.state.customer);
    customer.city = event.target.form[3].value;
    
    this.setState({
      customer,
      validAddress: this.checkAllValidations()
    });

    CustomerActions.SaveAddress(this.state);
  },

  checkAllValidations() {
    return (
      'success' == this.validationStateName() && 
      'success' == this.validationStateAddress() &&
      'success' == this.validationStateZipCode() &&
      'success' == this.validationStateCity()
    );
  },

  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <FormControl
              type='text'
              value={this.state.customer.name}
              placeholder='Enter your name'
              label='Name'
              bsStyle={this.validationStateName()}
              hasFeedback
              ref='inputName'
              onChange={this.handleChangeName}
            />
          </FormGroup>

          <FormGroup>
            <FormControl
                type='text'
                value={this.state.customer.address}
                placeholder='Enter your street address'
                label='Street'
                bsStyle={this.validationStateAddress()}
                hasFeedback
                ref='inputAddress'
                onChange={this.handleChangeAddress}
              />
          </FormGroup>

          <FormGroup>
            <FormControl
                type='text'
                value={this.state.customer.zipCode}
                placeholder='Enter your zip code'
                label='Street'
                bsStyle={this.validationStateZipCode()}
                hasFeedback
                ref='inputZipCode'
                onChange={this.handleChangeZipCode}
              />
          </FormGroup>

          <FormGroup>
            <FormControl
                type='text'
                value={this.state.customer.city}
                placeholder='Enter your city'
                label='City'
                bsStyle={this.validationStateCity()}
                hasFeedback
                ref='inputZipCode'
                onChange={this.handleChangeCity}
              />
          </FormGroup>
        </form>
      </div>
    );
  }
});

module.exports = CustomerData;