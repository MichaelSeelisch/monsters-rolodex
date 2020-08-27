import { Component, h } from '@stencil/core';

@Component({
	tag: 'test-component',
	styleUrl: 'test-component.less',
	shadow: true,
})

export class TestComponent {
  render() {
    return (
      <div>
      </div>
    );
  }
}
