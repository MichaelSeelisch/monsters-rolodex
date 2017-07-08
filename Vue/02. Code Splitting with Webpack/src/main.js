import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
})

new Vue({ 
  el: '#async-component',
  components: {
    AsyncComponent: () => import('./AsyncComponent.vue')
  }
});
