import city from './city';
import yard from './yard';
import www from './www';
import cards from './cards';
import gameBooks from './gamebooks';
import videoGames from './videogames';
import mini from './mini';
import rpg from './rpg';
import board from './board';
import sports from './sports';
import consoleGames from './console';

const groups = {
  city,
  yard,
  www,
  cards,
  gamebook: gameBooks,
  videogames: videoGames,
  mini,
  rpg,
  board,
  sports,
  console: consoleGames,
};

export default function (groupId) {
  const games = groups[groupId];
  if (!games) return [];
  return games.map((game, id) => {
    const {
      title,
    } = game;
    return {
      id,
      title,
    };
  });
}
