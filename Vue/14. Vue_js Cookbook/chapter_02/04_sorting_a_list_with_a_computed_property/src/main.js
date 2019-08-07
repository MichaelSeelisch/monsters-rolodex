
new Vue({ 
    el: '#app', 
    data: { 
        dams: [ 
            {name: 'Nurek Dam', country: 'Tajikistan', electricity: 3200}, 
            {name: 'Three Gorges Dam', country: 'China', electricity: 22500}, 
            {name: 'Tarbela Dam', country: 'Pakistan', electricity: 3500}, 
            {name: 'Guri Dam', country: 'Venezuela', electricity: 10200} 
        ],
        order: 1
    },
    computed: { 
        damsByElectricity () { 
            return this.dams.sort((d1, d2) => (d2.electricity - d1.electricity) * this.order);
        } 
    },
    methods: { 
        sort () { 
            this.order = this.order * -1;
        } 
    }
});
