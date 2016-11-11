jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const shallowRenderer = TestUtils.createRenderer();

const CheckboxWithLabel = require('../CheckboxWithLabel');

describe('CheckboxWithLabel', () => {
  shallowRenderer.render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  const checkbox = shallowRenderer.getRenderOutput();

  it('defaults to unchecked and Off label', () => {
    // Verify that it's Off by default
    const inputField = checkbox.props.children[0];
    const textNode = checkbox.props.children[1];

    expect(inputField.props.checked).toBe(false);
    expect(textNode).toEqual('Off');
  });
});
