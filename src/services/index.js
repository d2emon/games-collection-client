import getGroups from './data/groups';
import getGenres from './data/genres';
import wiki from './data/wiki';


const gameService = {
  fetchGroups: () => new Promise(resolve => resolve(getGroups())),
  fetchGenres: groupId => new Promise(resolve => resolve(getGenres(groupId))),
  fetchWiki: groupId => new Promise(resolve => resolve(wiki[groupId])),
};

export default gameService;
