<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Games</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>keyboard_arrow_down</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list id="gameList">
          <v-list-tile avatar v-for="item in items" v-bind:key="item.title" @click="selectGame(item.id)">
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img v-bind:src="item.avatar"/>
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <game-details :game="game"></game-details>
  </v-layout>
</template>

<script>
import GameDetails from './GameDetails'

export default {
  name: 'Default',
  components: {
    GameDetails
  },
  data: () => ({
    items: [
      { id: 1, title: 'Jason Oner', avatar: '/static/doc-images/lists/1.jpg' },
      { id: 2, title: 'Travis Howard', avatar: '/static/doc-images/lists/2.jpg' },
      { id: 3, title: 'Ali Connors', avatar: '/static/doc-images/lists/3.jpg' },
      { id: 4, title: 'Cindy Baker', avatar: '/static/doc-images/lists/4.jpg' }
    ],
    game: { id: '', title: '', avatar: '' },

    active: null,
    selectDate: null
  }),
  methods: {
    selectGame: function (id) {
      this.game = this.items[id - 1]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
#gameDetails {
  height: 80vh;
  overflow: auto;
}
#gameList {
  height: 80vh;
  overflow: auto;
}
</style>
