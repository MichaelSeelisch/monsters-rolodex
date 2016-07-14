import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

const CoolComponent = ({ greeting }) => (
  <div>
    <h1>Greeting</h1>
    <div>{ greeting }</div>
  </div>
);

describe('CoolComponent', () => {
  it('should...', () => {
    // Temporary place to store the output of the component
    // You don't need a DOM; shows the object structure
    const renderer = TestUtils.createRenderer();

    // Simulate Reacts DOM renderer
    renderer.render(<CoolComponent greeting='hellow world' />);
    
    const output = renderer.getRenderOutput();
    console.log(output);
  });
});
