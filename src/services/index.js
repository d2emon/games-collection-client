import getGroups from './data/groups';
import cityGames from './data/games/city';
import wiki from './data/wiki';


const gameService = {
  fetchGroups: () => new Promise(resolve => resolve(getGroups())),
  fetchGames: groupId => new Promise((resolve) => {
    if (groupId === 'city') return resolve(cityGames);
    return resolve([]);
  }),
  fetchWiki: groupId => new Promise(resolve => resolve(wiki[groupId])),
};

export default gameService;
