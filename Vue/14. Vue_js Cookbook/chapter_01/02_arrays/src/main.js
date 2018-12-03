import App from './components/App.js';

new Vue({
    data () {
        return {
            countdown: [10,9,8,7,6,5,4,3,2,1]
        }
    },
    propsData: {
        myProp: 'primary'
    },
    render: h => h(App)
}).$mount(`#app`);