
new Vue({ 
    el: '#app', 
    data: { 
        legCount: 0 
    }, 
    computed: { 
        tableCount: { 
            get () { 
                return this.legCount / 4 
            }, 
            set (newValue) { 
                this.legCount = newValue * 4 
            } 
        }
    },
    methods: {
        update (e) { 
            this.tableCount = e.target.value 
        }
    }
})