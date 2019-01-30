import city from './city'
import yard from './yard'
import www from './www'
import cards from './cards'
import gameBooks from './gamebooks'
import videoGames from './videogames'
import mini from './mini'
import rpg from './rpg'
import board from './board'
import sports from './sports'
import consoleGames from './console'

import markdown from '../../../helpers/markdown'
import wiki from '../wiki'

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
  return groups.map((group, index) => {
    const pages = wiki[group.slug]
    return {
      id: index,
      title: group.title,
      src: `/static/groups/${group.slug}.jpg`,
      slug: group.slug,
      link: group.link || `/group/${group.slug}`,
      description: markdown(group.description),
      text: markdown(group.text),
      wiki: pages || {}
    }
  })
}
