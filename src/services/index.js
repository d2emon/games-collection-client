import getGroups from './data/groups';
import getGames from './data/games';
import wiki from './data/wiki';


const gameService = {
  fetchGroups: () => new Promise(resolve => resolve(getGroups())),
  fetchGames: groupId => new Promise(resolve => resolve(getGames(groupId))),
  fetchWiki: groupId => new Promise(resolve => resolve(wiki[groupId])),
};

export default gameService;
