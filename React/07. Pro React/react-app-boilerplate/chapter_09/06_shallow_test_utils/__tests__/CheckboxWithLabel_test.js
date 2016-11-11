jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import * as ShallowTestUtils from 'react-shallow-testutils';

const shallowRenderer = TestUtils.createRenderer();

const CheckboxWithLabel = require('../CheckboxWithLabel');

describe('CheckboxWithLabel', () => {
  shallowRenderer.render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  const checkbox = shallowRenderer.getRenderOutput();

  const component = ShallowTestUtils.getMountedInstance(shallowRenderer);

  it('defaults to unchecked and Off label', () => {
    const expectedChildren = [
      <input
        type="checkbox"
        checked={false}
        onChange={component.onChange} />,
        'Off'
    ];

    expect(checkbox.props.children).toEqual(expectedChildren);
  });
});
