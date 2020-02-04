import Vue from 'vue'
import App from './App.vue'

import { defineCustomElements } from '../node_modules/stencil/loader';

Vue.config.productionTip = false

defineCustomElements(window);

new Vue({
  render: h => h(App),
}).$mount('#app')
