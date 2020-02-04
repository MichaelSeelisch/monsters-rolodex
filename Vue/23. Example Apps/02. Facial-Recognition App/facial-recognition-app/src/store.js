import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        images: []
    },
    mutations: {
        setImages(state, payload) {
            state.images = payload;
        }
    },
    actions: {}
});
