import { Component, h } from '@stencil/core';

@Component({
    tag: 'uc-side-drawer',
    styleUrl: './side-drawer.scss',
    //  scoped: true //=> adds only attribuztes to css classes
    shadow: true,   // => inlcudes pollyfills for older browsers
})
export class SideDrawer {
    render() {
        return (
            <aside>
                <h1>The Side Drawer</h1>
            </aside>
        );
    }
}