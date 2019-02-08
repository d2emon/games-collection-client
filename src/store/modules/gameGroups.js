import Service from '../../services';

const state = {
  gameGroups: [],
  group: null,
  games: [],
};

const mutations = {
  clearGroups: state => { state.gameGroups = []; },
  addGroup: (state, group) => state.gameGroups.push(group),
  setGroup: (state, group) => { state.group = group; },
  clearGames: state => { state.games = []; },
  addGame: (state, game) => state.games.push(game),
};

const actions = {
  fetchGroups: ({ commit }) => {
    commit('clearGroups');
    Service
      .fetchGroups()
      .then((gameGroups) => {
        gameGroups.forEach(gameGroup => commit('addGroup', gameGroup));
      });
  },
  fetchGroup: ({ state, commit, dispatch }, slug) => {
    dispatch('fetchGroups')
      .then(() => {
        const groups = state.gameGroups.filter(group => (group.slug === slug))
        if (groups.length <= 0) return commit('setGroup', null)
        const group = groups[0];
        commit('setGroup', group);
        commit('clearGames');
        return Service
          .fetchGenres(group.slug)
          .then(response => response.forEach(game => commit('addGame', game)));
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
