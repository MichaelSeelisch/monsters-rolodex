import Vue from "vue";

//  Single File Components
import HelloComponent from "./components/Hello.vue";

//  TypeScript Component
//  import HelloComponent from "./components/Hello";

let newVue = new Vue({
    el: "#app",

    template: `
        <div>
            Name: <input v-model="name" type="text">
            <hello-component :name="name" :initialEnthusiasm="5" />
        </div>`,

    data: {
        name: "World"
    },
    
    components: {
        HelloComponent
    }
});
