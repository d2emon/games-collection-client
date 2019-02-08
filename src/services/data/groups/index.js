import 'process';

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

import markdown from '../../../helpers/markdown';
import wiki from '../wiki';

const publicPath = process.env.BASE_URL;

const groups = [
  city,
  yard,
  www,
  cards,
  gameBooks,
  videoGames,
  mini,
  rpg,
  board,
  sports,
  consoleGames
]

export default function () {
  return groups.map(({
    title,
    slug,
    link,
    description,
    text,
    page
  }, index) => {
    const pages = wiki[slug]
    if (page) page.html = markdown(page.text)
    return {
      id: index,
      title,
      src: `${publicPath}groups/${slug}.jpg`,
      slug,
      link: link || `/group/${slug}`,
      description: markdown(description),
      text: markdown(text),
      page,
      wiki: pages || {}
    }
  })
}
