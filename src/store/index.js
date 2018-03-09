import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  // state: modules.state,
  // mutations: modules.mutations,
  // actions: modules.actions,
  strict: process.env.NODE_ENV !== 'production'
})
