import Vue from 'vue/dist/vue.js';
import App from './app.vue';

import '../styles.scss';

const app = window.addEventListener('load', () => {
    new Vue({
        'el': '#vueapp',
        name: App,
        components: {
            App
        },
        template: `<App />`
    })
});

export default app;