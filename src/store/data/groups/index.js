import city from './city'
import markdown from '../../../helpers/markdown'

const groups = [
  city,
  { title: 'Дворовые', slug: 'yard', description: '' },
  { title: 'Интеллектуальные', slug: 'www', description: '' },
  { title: 'Карточки', slug: 'cards', description: '' },
  { title: 'Книгры', slug: 'gamebook', description: '' },
  { title: 'Компьютерные', slug: 'videogames', description: '' },
  { title: 'Миниатюры', slug: 'mini', description: '' },
  { title: 'Ролевые', slug: 'rpg', description: '' },
  { title: 'Настольные', slug: 'board', description: '' },
  { title: 'Спорт', slug: 'sports', description: '' },
  { title: 'Эмуляторы', slug: 'console', description: '' }
]

export default function () {
  console.log(markdown);
  return groups.map((group, index) => {
    return {
      id: index,
      title: group.title,
      src: `/static/groups/${group.slug}.jpg`,
      slug: group.slug,
      description: markdown(group.description),
      text: markdown(group.text),
    }
  })
}
