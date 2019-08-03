
let surname = 'Snow';

new Vue({ 
    el: '#app', 
    data: { 
        name: 'John' 
    }, 
    computed: { 
        computedFullName () { 
            return this.name + ' ' + surname 
        } 
    }, 
    methods: { 
        saveSurname () { 
            surname = this.$el.querySelector('#surname').value 
        }
    } 
})