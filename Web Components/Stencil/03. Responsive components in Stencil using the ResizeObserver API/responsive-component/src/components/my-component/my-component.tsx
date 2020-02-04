import { Component, Prop, h, Element } from '@stencil/core';
import ResizeObserver from 'resize-observer-polyfill';

import { format } from '../../utils/utils';

@Component({
    tag: 'my-component',
    styleUrl: 'my-component.css',
    shadow: true
})
export class MyComponent {
    /**
     * The first name
     */
    @Prop() first: string;

    /**
     * The middle name
     */
    @Prop() middle: string;

    /**
     * The last name
     */
    @Prop() last: string;

    @Element() element: HTMLElement;
    private ro: ResizeObserver;

    componentDidLoad() {
        this.ro = new ResizeObserver(entries => {
            for (const entry of entries) {
                this.applySizeClasses(entry.contentRect.width);
            }
          });

        this.ro.observe(this.element);
    }

    componentDidUnload() {
        this.ro.disconnect();
    }

    applySizeClasses(size: number) {
        let small = false;
        let medium = false;
        let large = false;

        if (size <= 200) small = true;
        else if (size <= 400) medium = true;
        else large = true;

        this.element.classList.toggle("small", small);
        this.element.classList.toggle("medium", medium);
        this.element.classList.toggle("large", large);
      }

    private getText(): string {
        return format(this.first, this.middle, this.last);
    }

    render() {
        return <div>Hello, World! I'm {this.getText()}</div>;
    }
}
