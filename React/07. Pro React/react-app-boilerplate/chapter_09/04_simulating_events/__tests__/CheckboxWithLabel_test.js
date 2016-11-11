jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const CheckboxWithLabel = require('../CheckboxWithLabel');

describe('CheckboxWithLabel', () => {
  // Render a checkboc with label in the document
  var checkbox = TestUtils.renderIntoDocument(
    <CheckboxWithLabel labelOn='On' labelOff='Off' />
  );

  var checkboxNode = ReactDOM.findDOMNode(checkbox);

  it('defaults to Off label', () => {
    // Verify that it's Off by default
    expect(checkboxNode.textContent).toEqual('Off');
  });

  it('defaults to unchecked', () => {
    // Verify that the checkbox input field isn't checked by default
    let checkboxElement = TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input');
    expect(checkboxElement.checked).toBe(false);
  });

  it('changes the label after click', () => {
    // Simulate a click and verify tha it is now On
    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(checkbox, 'input')
    );
    expect(checkboxNode.textContent).toEqual('On');
  });
});
