new Vue({
    el:'#app',
    data: {
        toastedBreads: 0
    },
    methods:{
        toast() {
            this.toastedBreads++;
        }
    }
});

