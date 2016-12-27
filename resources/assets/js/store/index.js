import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  locale: 'en'
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    },
    SET_LOCALE(state, locale) {
        state.locale = locale;
    }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    // set_locale: ({ commit }) => commit('SET_LOCALE'),
    set_locale ({ commit, state }, locale) {
        commit('SET_LOCALE', locale);
    }
}

// getters are functions
const getters = {
  getCount: state => state.count,
  getLocale: state => state.locale,
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
