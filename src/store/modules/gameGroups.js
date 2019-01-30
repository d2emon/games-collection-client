import getGroups from '../data/groups'

const state = {
  gameGroups: [],
}

const mutations = {
  clearGroups: state => { state.gameGroups = [] },
  addGroup: (state, group) => state.gameGroups.push(group)
}

const actions = {
  fetchGroups: ({ commit }) => {
    console.log('fetch')
    commit('clearGroups')
    const gameGroups = getGroups()
    gameGroups.forEach(gameGroup => commit('addGroup', gameGroup))
  },
}

export default {
  namespaced: true,
  state,
  // getters,
  mutations,
  actions
}
