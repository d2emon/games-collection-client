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
          <v-list-tile avatar v-for="item in items" v-bind:key="item._id" @click="selectGame(item._id)">
            <v-list-tile-content>
              <v-list-tile-title v-if="item.title" v-text="item.title"></v-list-tile-title>
              <v-list-tile-title v-else v-text="'Untitled'"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar v-if="item.image">
              <img v-bind:src="item.image"/>
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
    <game-details :id="gameId"></game-details>
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
    items: [],
    gameId: null,

    active: null,
    selectDate: null
  }),
  methods: {
    selectGame: function (id) {
      this.gameId = id
    },
    refreshGames: function () {
      this.$store.dispatch('refreshMessage').then(() => {
        console.log('Games refreshed')
        console.log(this.$store.state.message)
        this.items = this.$store.state.message
      })
    }
  },
  mounted: function () {
    this.refreshGames()
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
