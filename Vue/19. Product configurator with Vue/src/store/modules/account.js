const state = {
    auth: false,
    showLoginForm: false,
}
const actions = {
    showLogin({ commit }) {
        commit('showForm')
    },
    hideLogin({ commit }) {
        commit('hideForm')
    },
    attemptLogin({ commit }) {
        // not when empty => need to add stuff to state
        commit('authorize')
    },
    logout({ commit }) {
        commit('deauthorize')
    },
}
const mutations = {
    showForm(state) {
        state.showLoginForm = true
    },
    hideForm(state) {
        state.showLoginForm = false
    },
    authorize(state) {
        state.auth = true
        state.showLoginForm = false
    },
    deauthorize(state) {
        state.auth = false
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
} 