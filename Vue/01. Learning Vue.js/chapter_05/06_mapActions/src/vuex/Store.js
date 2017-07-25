import Vue from 'vue';
import Vuex from 'vuex';

import getters from './Getters';
import actions from './Actions';
import {
  CHANGE_MSG,
  INCREMENT_COUNTER
} from './Mutation_Types';

Vue.use(Vuex)

const state = {
  message: 'Hello Vue!',
  counter: 0
}

const mutations = {
  [CHANGE_MSG](state, msg) {
    state.message = msg
  },
  [INCREMENT_COUNTER](state) {
    state.counter++;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
  /*
    state: state,
    mutations: mutations,
    getters: getters
  */
})