import Vue from 'vue';
import Vuex from 'vuex';

import configurator from './modules/configurator';
import account from './modules/account';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        configurator,
        account
    }
});
