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
});
