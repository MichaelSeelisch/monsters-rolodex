
new Vue({ 
    el: '#app', 
    data: { 
        experiments: [ 
            {name: 'RHIC Ion Collider', cost: 650, field: 'Physics'}, 
            {name: 'Neptune Undersea Observatory', cost: 100, field: 'Biology'}, 
            {name: 'Violinist in the Metro', cost: 3, field: 'Psychology'}, 
            {name: 'Large Hadron Collider', cost: 7700, field: 'Physics'}, 
            {name: 'DIY Particle Detector', cost: 0, field: 'Physics'} 
        ]
    },
    // Method 1:
    computed: { 
        nonPhysicsComp () { 
            return this.experiments.filter(exp => exp.field !== 'Physics') 
        },
        lowCostComp () { 
            return this.experiments.filter(exp => exp.cost <= 3) 
        },

        // Method 3:
        filteredExperiments () { 
            return this.lowCostMeth(this.nonPhysicsMeth(this.experiments)) 
        }
    },
    // Method 2:
    methods: { 
        nonPhysicsMeth (list) { 
            return list.filter(exp => exp.field !== 'Physics') 
        }, 
        lowCostMeth (list) { 
            return list.filter(exp => exp.cost <= 3) 
        } 
      }
});
