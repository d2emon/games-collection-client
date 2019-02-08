import markdown from '../../helpers/markdown'
import Service from '../../services';

const state = {
  page: null
};

const mutations = {
  setPage: (state, page) => { state.page = page; },
};

const actions = {
  fetchPage: ({ commit }, { groupId, pageId }) => {
    return Service
      .fetchWiki(groupId)
      .then((group) => {
        if (!group) return commit('setPage', null);
        const page = group[pageId];
        if (!page) return commit('setPage', null);
        page.html = markdown(page.text);
        return commit('setPage', page);
      });
  },
};

export default {
  namespaced: true,
  state,
  // getters,
  mutations,
  actions,
};
