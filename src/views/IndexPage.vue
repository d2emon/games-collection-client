<template>
  <v-layout row wrap>
    <v-flex
      xs3
      v-for="g in games"
      key="g.id"
    >
      <v-card
        :to="g.to"
      >
        <v-card-title>
          <h1 v-text="g.title" />
        </v-card-title>
        <v-card-media
          contain
          height="200px"
          :src="g.src"
        >
        </v-card-media>
        <v-card-text>
          {{ g }}
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="selectGame(g)"
          >
            Button
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import GameList from '@/components/GameList'
import GameDetails from '@/components/GameDetails'

export default {
  name: 'index-page',
  data: () => ({
    games: [
      { id: 0, title: 'Городские', src: '/static/groups/city.jpg' },
      { id: 1, title: 'Дворовые', src: '/static/groups/yard.jpeg' },
      { id: 2, title: 'Интеллектуальные', src: '/static/groups/www.jpeg' },
      { id: 3, title: 'Карточки', src: '/static/groups/cards.jpg'  },
      { id: 4, title: 'Книгры', src: '/static/groups/gamebook.jpg'  },
      { id: 5, title: 'Компьютерные', to: '/games/', src: '/static/groups/videogames.jpg'  },
      { id: 6, title: 'Миниатюры', src: '/static/groups/mini.jpg'  },
      { id: 7, title: 'Ролевые', src: '/static/groups/rpg.jpg'  },
      { id: 8, title: 'Настольные', src: '/static/groups/board.jpg'  },
      { id: 9, title: 'Спорт', src: '/static/groups/sports.jpg'  },
      { id: 10, title: 'Эмуляторы', src: '/static/groups/console.jpg'  }
    ]
  }),
  methods: {
    selectGame (payload) {
      alert(payload.id)
    }
  }
}
</script>
