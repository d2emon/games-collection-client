<template>
  <v-layout row wrap>
    <v-flex xs3>
      <game-list @select="selectGame" />
    </v-flex>
    <v-flex xs9>
      <game-details :id="gameId" />
    </v-flex>
  </v-layout>
</template>

<script>
import GameList from './GameList'
import GameDetails from './GameDetails'

export default {
  name: 'Default',
  components: {
    GameList,
    GameDetails
  },
  data: () => ({
    gameId: null
  }),
  methods: {
    selectGame (payload) {
      this.gameId = payload.id
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
