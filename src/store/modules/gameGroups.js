import getGroups from '../data/groups'

const state = {
  gameGroups: [],
  group: null
}

const mutations = {
  clearGroups: state => { state.gameGroups = [] },
  addGroup: (state, group) => state.gameGroups.push(group),
  setGroup: (state, group) => { state.group = group }
}

const actions = {
  fetchGroups: ({ commit }) => {
    commit('clearGroups')
    const gameGroups = getGroups()
    gameGroups.forEach(gameGroup => commit('addGroup', gameGroup))
  },
  fetchGroup: ({ state, commit, dispatch }, slug) => {
    dispatch('fetchGroups')
      .then(() => {
        const groups = state.gameGroups.filter(group => (group.slug === slug))
        if (groups.length <= 0) return commit('setGroup', null)
        commit('setGroup', groups[0])
      })
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  mutations,
  actions
}
