import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'uc-side-drawer',
    styleUrl: './side-drawer.scss',
    //  scoped: true //=> adds only attribuztes to css classes
    shadow: true,   // => inlcudes pollyfills for older browsers
    //  scoped: true
})
export class SideDrawer {
    @Prop({ reflect: true }) title: string; // observed with internal "attributeChangedCallback"; render method calls after change
    //  @Prop() open: boolean;

    render() {
        /*
            let content = null;

            if (this.open) {
                content = (
                    <aside>
                        <header>
                            <h1>{this.title}</h1>
                        </header>
                        <main>
                            <slot />
                        </main>
                    </aside>
                )
            }
        */

        return (
            <aside>
                <header>
                    <h1>{this.title}</h1>
                </header>
                <main>
                    <slot />
                </main>
            </aside>
        );
    }
}