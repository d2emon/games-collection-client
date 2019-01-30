import wiki from '../data/wiki'
import markdown from '../../helpers/markdown'

const state = {
  page: null
}

const mutations = {
  setPage: (state, page) => { state.page = page }
}

const actions = {
  fetchPage: ({ commit }, { groupId, pageId }) => {
    const group = wiki[groupId]
    if (!group) return commit('setPage', null)
    const page = group[pageId]
    if (!page) return commit('setPage', null)
    page.html = markdown(page.text)
    commit('setPage', page)
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  mutations,
  actions
}
