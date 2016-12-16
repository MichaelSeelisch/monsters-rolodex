'use strict';

import React from 'react';
import ClassNames from 'classnames';
import {
  FormGroup,
  FormControl,
  InputGroup,
  Button,
  DropdownButton,
  MenuItem,
  ControlLabel,
  Checkbox,
  Radio
} from 'react-bootstrap';

const FormFields = React.createClass({
  getInitialState() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },

  validateEmail() {
    let length = this.state.email.length;
    let validEmail = this.state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if (validEmail) return 'success';
    else if( length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  validatePassword() {
    let pw = this.state.password;
    if (pw.length < 5) return null;

    let containsNumber = pw.match(/[0-9]/);
    let hasCapitalLetter = pw.toLowerCase() !== pw;

    return containsNumber && 
      hasCapitalLetter ? 'success' : 'error';
  },

  handlePasswordChange(event) {
    this.setState({
      password: event.target.form[2].value
    })
  },

  handleEmailChange(event) {
    this.setState({
      email: event.target.form[1].value
    })
  },

  validateForm() {
    return (
      this.validateEmail() === this.validatePassword()
    );
  },
  
  render() {
    return (
      <form>
        <FormGroup>
          <FormControl
            type='text'
            label='Name'
            placeholder='Enter your name' />
        </FormGroup>

        <FormGroup validationState= { this.validateEmail() }>
          <FormControl
            type='email'
            label='Email Address'
            placeholder='Enter your email'
            onChange={ this.handleEmailChange }
            ref='inputEmail' />
         </FormGroup>

         <FormGroup validationState= { this.validatePassword() }>
          <FormControl
            type='password'
            label='Password'
            onChange={ this.handlePasswordChange }
            ref='inputPassword' />
         </FormGroup>

         <FormGroup>
          <Button
            type='submit'
            disabled= { !(this.validateForm())}>
            Submit this form
          </Button>
        </FormGroup>

        <h2>Weitere Form-Felder:</h2>

        <DropdownButton title='Select Field' key='123' id='mySelect'>
          <MenuItem eventKey='1'>First select</MenuItem>
          <MenuItem eventKey='2'>Second select</MenuItem>
        </DropdownButton>

        <FormGroup controlId='formControlsSelectMultiple'>
          <ControlLabel>Multiple select</ControlLabel>
          <FormControl componentClass='select' multiple>
            <option value='select'>Select (multiple) Value 1</option>
            <option value='other'>Select (multiple) Value 2</option>
            <option value='other'>Select (multiple) Value 3</option>
          </FormControl>
        </FormGroup>

        <Checkbox checked readOnly>
          Checkbox
        </Checkbox>
        <Radio checked readOnly>
          Radio
        </Radio>

        <FormGroup>
          <Checkbox inline>
            1
          </Checkbox>
          {' '}
          <Checkbox inline>
            2
          </Checkbox>
          {' '}
          <Checkbox inline>
            3
          </Checkbox>
        </FormGroup>
        <FormGroup>
          <Radio inline>
            1
          </Radio>
          {' '}
          <Radio inline>
            2
          </Radio>
          {' '}
          <Radio inline>
            3
          </Radio>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Textarea</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>
      </form>

    );
  }
 });

module.exports = FormFields;