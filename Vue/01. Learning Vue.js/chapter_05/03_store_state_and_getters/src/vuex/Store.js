import Vue from 'vue';
import Vuex from 'vuex';
import getters from './Getters';

Vue.use(Vuex)

const state = {
  msg: 'Hello Vue!'
}

const mutations = {
  changeMessage(state, msg) {
    state.msg = msg
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
  /*
    state: state,
    mutations: mutations,
    getters: getters
  */
})